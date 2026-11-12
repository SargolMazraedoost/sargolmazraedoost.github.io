---
title: "SMILES: molecules written as text"
pubDate: 2026-09-11
description: "A visual introduction to SMILES and how AI learns from molecular strings to predict properties."
tags: ["SMILES", "chemistry"]
---

How can a molecule become a line of text? **SMILES**, short for *Simplified Molecular Input Line Entry System*, records atoms and the bonds connecting them.

## Start with ethanol: `CCO`

Read from left to right: carbon → carbon → oxygen. Here, neighboring symbols imply single bonds. Hydrogens are implicit, giving **CH₃–CH₂–OH**.

<div class="smiles-examples">
  <figure class="smiles-figure">
    <figcaption><strong>1. Chain · ethanol</strong><br /><code>CCO</code></figcaption>
    <img src="/assets/blog/smiles-a-visual-guide/ethanol.svg" alt="Ethanol: CH3 bonded to CH2 bonded to OH." width="480" height="120" />
    <p>The hydrogens are implicit in the SMILES string.</p>
  </figure>
  <figure class="smiles-figure">
    <figcaption><strong>2. Branch · propan-2-ol</strong><br /><code>CC(O)C</code></figcaption>
    <img src="/assets/blog/smiles-a-visual-guide/branch.svg" alt="Propan-2-ol: a central CH group is bonded to two CH3 groups and an OH group." width="480" height="180" />
    <p>The <code>(O)</code> branch connects to the preceding carbon.</p>
  </figure>
  <figure class="smiles-figure">
    <figcaption><strong>3. Ring · cyclohexane</strong><br /><code>C1CCCCC1</code></figcaption>
    <img src="/assets/blog/smiles-a-visual-guide/ring.svg" alt="Six CH2 groups in a ring. The highlighted solid bond connects the first and sixth carbon, as specified by the matching ring digits." width="480" height="230" />
    <p>The matching <code>1</code>s close the highlighted single bond. Each corner is a CH₂ group.</p>
  </figure>
</div>

## A few symbols go a long way

- **Bonds:** `C=C` is ethene; `C#C` is ethyne. The symbols `=` and `#` mean double and triple bonds.
- **Branches:** in `CC(O)C`, the oxygen branches from the preceding carbon. This is propan-2-ol.
- **Rings:** `C1CCCCC1` is cyclohexane. The two `1`s connect their attached atoms; they do not add atoms.
- **Aromatic atoms:** lowercase `c` denotes aromatic carbon. `c1ccccc1` represents benzene.

SMILES describes connectivity, rather than a fixed 3D shape. A molecule can also have several valid strings: `CCO` and `OCC` both describe ethanol.

## How does SMILES help AI?

SMILES gives molecules a compact, machine-readable form. In a supervised sequence model, the string is split into **tokens** and encoded as numerical vectors. Training adjusts the model to predict measured properties from these inputs. [SMILES-based neural models](https://arxiv.org/abs/1703.07076) can learn relationships between structure and a property.

<figure class="smiles-figure smiles-workflow">
  <figcaption><strong>How AI learns from SMILES</strong></figcaption>
  <h3>Training</h3>
  <ol class="smiles-flow">
    <li><strong>Training examples</strong><span>SMILES paired with measured properties</span></li>
    <li><strong>Learn patterns</strong><span>Encode strings and adjust model parameters</span></li>
    <li><strong>Trained model</strong><span>Keep the learned parameters</span></li>
  </ol>
  <h3>Prediction</h3>
  <ol class="smiles-flow">
    <li><strong>New SMILES</strong><span>Use the same tokenization and encoding</span></li>
    <li><strong>Trained model</strong><span>Apply the learned parameters</span></li>
    <li><strong>Estimated property</strong><span>For example, solubility or retention time</span></li>
  </ol>
  <p>The new molecule’s measured property is not supplied during prediction.</p>
</figure>

For example, training data might pair each molecule’s SMILES with its measured **solubility** or **retention time**. After training, the model receives a new SMILES and estimates that property.

This helps researchers:

- **Predict properties** before running every laboratory experiment.
- **Screen candidates** and prioritize molecules for further testing.
- **Explore new structures:** [generative models](https://arxiv.org/abs/1701.01329) can propose SMILES strings for candidate molecules, which then need chemical validation.

The string describes the structure; it does not contain the experimental answer. Prediction quality depends on the training data and evaluation on unseen molecules.

## An example from my research

A compact molecular string is a useful input for machine learning. In [our retention-time research](https://doi.org/10.1021/acs.jcim.5c00167), a hybrid Transformer–LSTM model learns from SMILES to predict chromatographic retention time.

This connects a textual molecular representation to an experimental measurement, helping estimate when a compound will elute from a chromatography column.

Retention time also depends on the chromatographic conditions; a prediction should be evaluated for the setup where it will be used.

For the full syntax, see the [Daylight SMILES reference](https://www.daylight.com/dayhtml/doc/theory/theory.smiles.html).
