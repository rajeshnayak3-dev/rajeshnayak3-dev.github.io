/* REVEX certificate renderer: draws the certificate on a canvas and exports PNG/PDF. */
(function () {
  "use strict";
  var NAVY = "#16213A", RED = "#B42318", INK2 = "#4B5569", LINE = "#C7CEDB", PAPER = "#FFFFFF", GREEN = "#157347";

  function fmtDate(iso) {
    var d = new Date(iso);
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  }

  function fitText(ctx, text, maxW, size, weight, family) {
    var s = size;
    do { ctx.font = weight + " " + s + "px " + family; s -= 2; } while (ctx.measureText(text).width > maxW && s > 24);
    return s + 2;
  }

  function qrImage(text) {
    return new Promise(function (resolve) {
      var host = document.querySelector("[data-qr]");
      if (!host || typeof window.QRCode === "undefined") return resolve(null);
      host.innerHTML = "";
      try {
        new window.QRCode(host, { text: text, width: 240, height: 240, colorDark: NAVY, colorLight: "#ffffff", correctLevel: window.QRCode.CorrectLevel.M });
      } catch (e) { return resolve(null); }
      setTimeout(function () {
        var c = host.querySelector("canvas");
        resolve(c || host.querySelector("img"));
      }, 60);
    });
  }

  function draw(canvas, data) {
    var ctx = canvas.getContext("2d");
    var W = canvas.width, H = canvas.height;
    var sans = '"Public Sans", "Segoe UI", Arial, sans-serif';
    var mono = '"IBM Plex Mono", Consolas, monospace';

    return (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(function () {
      return qrImage(data.verifyUrl);
    }).then(function (qr) {
      ctx.fillStyle = PAPER; ctx.fillRect(0, 0, W, H);
      // frame: form-box motif
      ctx.strokeStyle = NAVY; ctx.lineWidth = 6; ctx.strokeRect(50, 50, W - 100, H - 100);
      ctx.strokeStyle = RED; ctx.lineWidth = 2; ctx.strokeRect(74, 74, W - 148, H - 148);
      // left band
      ctx.fillStyle = NAVY; ctx.fillRect(74, 74, 26, H - 148);

      // brand
      ctx.save(); ctx.translate(180, 170);
      ctx.strokeStyle = RED; ctx.lineWidth = 7; roundRect(ctx, 0, 0, 74, 74, 8); ctx.stroke();
      ctx.strokeStyle = NAVY; ctx.lineWidth = 9; ctx.lineCap = "round"; ctx.lineJoin = "round";
      ctx.beginPath(); ctx.moveTo(18, 40); ctx.lineTo(32, 54); ctx.lineTo(58, 24); ctx.stroke();
      ctx.restore();
      ctx.fillStyle = NAVY; ctx.font = "800 64px " + sans; ctx.textBaseline = "middle";
      spaced(ctx, "REVEX", 280, 208, 14);

      ctx.textBaseline = "alphabetic";
      ctx.fillStyle = INK2; ctx.font = "500 34px " + sans;
      ctx.fillText("US Healthcare Revenue Cycle Management", 180, 330);

      ctx.fillStyle = RED; ctx.font = "700 40px " + sans;
      ctx.fillText("Certificate of achievement", 180, 450);

      ctx.fillStyle = INK2; ctx.font = "400 34px " + sans;
      ctx.fillText("This certifies that", 180, 530);

      var nameSize = fitText(ctx, data.name, W - 600, 110, "800", sans);
      ctx.fillStyle = NAVY; ctx.font = "800 " + nameSize + "px " + sans;
      ctx.fillText(data.name, 180, 660);
      ctx.strokeStyle = LINE; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(180, 700); ctx.lineTo(W - 420, 700); ctx.stroke();

      ctx.fillStyle = INK2; ctx.font = "400 34px " + sans;
      wrap(ctx, "has passed the REVEX certification exam in US healthcare revenue cycle management, covering the RCM cycle, insurance and payers, claim forms, denials, non-denials and specialty billing, and is awarded the title", 180, 775, W - 620, 48);
      ctx.fillStyle = NAVY; ctx.font = "700 52px " + sans;
      ctx.fillText(data.certName, 180, 960);

      // facts row (form boxes)
      var facts = [["Score", data.percent + "%"], ["Date issued", fmtDate(data.issued)], ["Certificate ID", data.id]];
      var x = 180, y = 1040, bw = [260, 420, 460];
      facts.forEach(function (f, i) {
        ctx.strokeStyle = RED; ctx.lineWidth = 2; roundRect(ctx, x, y, bw[i], 120, 6); ctx.stroke();
        ctx.fillStyle = RED; ctx.font = "600 24px " + sans; ctx.fillText(f[0], x + 22, y + 40);
        ctx.fillStyle = NAVY; ctx.font = (i === 2 ? "600 36px " + mono : "700 38px " + sans); ctx.fillText(f[1], x + 22, y + 92);
        x += bw[i] + 28;
      });

      // signature
      ctx.fillStyle = NAVY; ctx.font = "italic 400 46px Georgia, 'Times New Roman', serif";
      ctx.fillText(data.signatory, W - 560, 1110);
      ctx.strokeStyle = NAVY; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(W - 560, 1130); ctx.lineTo(W - 180, 1130); ctx.stroke();
      ctx.fillStyle = INK2; ctx.font = "500 26px " + sans; ctx.fillText(data.signatory + ", " + data.signatoryTitle, W - 560, 1170);

      // QR + verify
      if (qr) {
        ctx.drawImage(qr, W - 420, 200, 240, 240);
        ctx.fillStyle = INK2; ctx.font = "500 22px " + sans;
        ctx.textAlign = "center"; ctx.fillText("Scan to verify", W - 300, 475); ctx.textAlign = "left";
      }

      ctx.fillStyle = "#6B7488"; ctx.font = "400 22px " + sans;
      ctx.fillText("Verify at " + data.verifyUrl.replace(/^https?:\/\//, "") + ". Issued by REVEX, a free training programme. Not an accredited or licensing credential.", 180, H - 130);
      return canvas;
    });
  }

  function spaced(ctx, text, x, y, gap) {
    for (var i = 0; i < text.length; i++) { ctx.fillText(text[i], x, y); x += ctx.measureText(text[i]).width + gap; }
  }
  function wrap(ctx, text, x, y, maxW, lh) {
    var words = text.split(" "), line = "";
    for (var i = 0; i < words.length; i++) {
      var test = line + words[i] + " ";
      if (ctx.measureText(test).width > maxW && line) { ctx.fillText(line.trim(), x, y); line = words[i] + " "; y += lh; }
      else line = test;
    }
    ctx.fillText(line.trim(), x, y);
  }
  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  }

  function fileName(data, ext) { return "REVEX-certificate-" + data.id + "." + ext; }

  function downloadPNG(canvas, data) {
    canvas.toBlob(function (blob) {
      var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = fileName(data, "png");
      document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
    }, "image/png");
  }
  function downloadPDF(canvas, data) {
    if (!window.jspdf || !window.jspdf.jsPDF) { downloadPNG(canvas, data); return; }
    var pdf = new window.jspdf.jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
    pdf.setProperties({ title: "REVEX certificate " + data.id, subject: data.certName, author: "REVEX" });
    pdf.addImage(canvas.toDataURL("image/jpeg", 0.95), "JPEG", 0, 0, 297, 210);
    pdf.save(fileName(data, "pdf"));
  }

  function linkedInUrl(data) {
    var d = new Date(data.issued);
    var p = new URLSearchParams({
      startTask: "CERTIFICATION_NAME", name: data.certName, organizationName: "REVEX",
      issueYear: String(d.getFullYear()), issueMonth: String(d.getMonth() + 1),
      certUrl: data.verifyUrl, certId: data.id
    });
    return "https://www.linkedin.com/profile/add?" + p.toString();
  }

  window.REVEXCert = { draw: draw, downloadPNG: downloadPNG, downloadPDF: downloadPDF, linkedInUrl: linkedInUrl, fmtDate: fmtDate };
})();
