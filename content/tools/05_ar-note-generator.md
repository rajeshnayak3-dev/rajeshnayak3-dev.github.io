---
title: AR note generator
short: AR note generator
description: Fill in the call details and copy a complete, audit-ready AR note with status, reason, action and follow-up date.
order: 5
level: Tool
kind: tool
track: false
keywords: AR note generator claim note template AR documentation call note audit ready note payer call notes
---

<div class="tool" data-tool="note" markdown="0">
  <div class="tool-grid">
    <label class="field"><span>Call date</span><input id="n-date" type="date"></label>
    <label class="field"><span>How you checked</span>
      <select id="n-method"><option>Called payer</option><option>Checked payer portal</option><option>Checked IVR</option><option>Checked 276/277 status</option></select>
    </label>
    <label class="field"><span>Payer</span><input id="n-payer" placeholder="e.g. Aetna"></label>
    <label class="field"><span>Rep name</span><input id="n-rep" placeholder="e.g. Maria"></label>
    <label class="field"><span>Call reference #</span><input id="n-ref" placeholder="e.g. 4471-2290"></label>
    <label class="field"><span>Payer claim #</span><input id="n-claim"></label>
    <label class="field"><span>Date of service</span><input id="n-dos" type="date"></label>
    <label class="field"><span>Status</span>
      <select id="n-status">
        <option value="paid">Paid</option>
        <option value="denied" selected>Denied</option>
        <option value="process">In process / pending</option>
        <option value="nof">Not on file</option>
      </select>
    </label>
  </div>
  <div class="tool-grid" data-n-group="paid">
    <label class="field"><span>Paid amount ($)</span><input id="n-paidamt" type="number" step="0.01"></label>
    <label class="field"><span>Paid date</span><input id="n-paiddate" type="date"></label>
    <label class="field"><span>Check / EFT #</span><input id="n-check"></label>
  </div>
  <div class="tool-grid" data-n-group="denied">
    <label class="field"><span>Denial code</span><input id="n-code" placeholder="e.g. CO-197"></label>
    <label class="field"><span>Denial date</span><input id="n-denydate" type="date"></label>
    <label class="field wide"><span>Reason in plain words</span><input id="n-reason" placeholder="e.g. no auth on file for 72148"></label>
  </div>
  <div class="tool-grid" data-n-group="process">
    <label class="field"><span>Received date</span><input id="n-recv" type="date"></label>
    <label class="field wide"><span>Reason pending</span><input id="n-pending" placeholder="e.g. medical records requested"></label>
  </div>
  <div class="tool-grid">
    <label class="field wide"><span>Action taken</span><input id="n-action" placeholder="e.g. Sent corrected claim with auth # in box 23"></label>
    <label class="field"><span>Follow-up date</span><input id="n-fu" type="date"></label>
  </div>
  <div class="tool-out note-out">
    <pre id="note-text"></pre>
    <div class="note-actions"><button type="button" class="btn btn-primary" id="note-copy">Copy note</button><span id="note-copied" class="small-note" aria-live="polite"></span></div>
  </div>
</div>

## What makes a note pass audit

A complete note answers six questions: **when and how** you checked, **who** you spoke to (with a reference number), the **status**, the **reason**, the **action** you took, and **when** the claim will be checked again. The generator builds the note in that order. Add anything specific to the claim before saving it in the billing system, and follow your client's abbreviations.

Nothing you type here is sent or stored. Clear the page when you're done if you used real claim details.
