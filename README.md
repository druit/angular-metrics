# Angular Metrics Analyzer

## English

### Overview

Angular Metrics Analyzer is a static analysis and software metrics extraction tool for Angular applications based on TypeScript AST parsing.

The project is developed as part of an MSc thesis at the University of Macedonia and focuses on analyzing Angular source code in order to extract maintainability, complexity and coupling metrics that can later be used for technical debt analysis and software quality evaluation.

The analyzer supports Angular-specific artifacts such as:

* Components
* Services
* Guards
* Interceptors
* Directives
* Pipes

---

## Features

### Static Analysis

* TypeScript AST parsing
* Angular-aware source analysis
* File-level and class-level metrics

### Supported Metrics

* LOC (Lines of Code)
* Cyclomatic Complexity
* WMC (Weighted Methods per Class)
* RFC (Response For a Class)
* CBO (Coupling Between Objects)
* Fan-In / Fan-Out
* NOM (Number of Methods)
* DIT (Depth of Inheritance Tree)

### Code Smell Detection

* High Complexity
* Large Classes
* Excessive Coupling
* Maintainability warnings

### Export Support

* CSV export
* Structured metrics reports

---

## Supported Angular Files

```text id="9b2j9d"
.component.ts
.service.ts
.guard.ts
.interceptor.ts
.directive.ts
.pipe.ts
```

---

## Installation

```bash id="imqljz"
npm install
```

---

## Usage

```bash id="3fz4wl"
node index.js <angular-project-path>
```

Example:

```bash id="r88fqf"
node index.js ./sample-angular-project
```

---

## Future Improvements

* Angular template analysis
* RxJS complexity analysis
* Technical debt scoring
* Dependency graph visualization
* Interactive dashboard
* Historical analysis

---

## Research Goal

The goal of this project is to investigate the relationship between software metrics, maintainability and technical debt in Angular applications.

---

# Αναλυτής Μετρικών Angular

## Ελληνικά

### Περιγραφή

Το Angular Metrics Analyzer είναι ένα εργαλείο στατικής ανάλυσης και εξαγωγής μετρικών λογισμικού για εφαρμογές Angular, βασισμένο σε ανάλυση AST (Abstract Syntax Tree) της TypeScript.

Το έργο αναπτύσσεται στο πλαίσιο μεταπτυχιακής διπλωματικής εργασίας στο Πανεπιστήμιο Μακεδονίας και στοχεύει στην ανάλυση κώδικα Angular με σκοπό την εξαγωγή μετρικών συντηρησιμότητας, πολυπλοκότητας και σύζευξης, οι οποίες μπορούν να χρησιμοποιηθούν αργότερα για ανάλυση τεχνικού χρέους και αξιολόγηση ποιότητας λογισμικού.

Το εργαλείο υποστηρίζει Angular artifacts όπως:

* Components
* Services
* Guards
* Interceptors
* Directives
* Pipes

---

## Δυνατότητες

### Στατική Ανάλυση

* AST parsing TypeScript
* Angular-aware ανάλυση πηγαίου κώδικα
* Μετρικές σε επίπεδο αρχείου και κλάσης

### Υποστηριζόμενες Μετρικές

* LOC (Γραμμές Κώδικα)
* Κυκλωματική Πολυπλοκότητα
* WMC
* RFC
* CBO
* Fan-In / Fan-Out
* NOM
* DIT

### Ανίχνευση Code Smells

* Υψηλή πολυπλοκότητα
* Μεγάλες κλάσεις
* Υπερβολική σύζευξη
* Προειδοποιήσεις συντηρησιμότητας

### Εξαγωγή Αναφορών

* Εξαγωγή CSV
* Αναφορές μετρικών

---

## Υποστηριζόμενα Angular Αρχεία

```text id="ybchml"
.component.ts
.service.ts
.guard.ts
.interceptor.ts
.directive.ts
.pipe.ts
```

---

## Εγκατάσταση

```bash id="nmsj02"
npm install
```

---

## Χρήση

```bash id="7i2skw"
node index.js <διαδρομή-angular-project>
```

Παράδειγμα:

```bash id="6j6it9"
node index.js ./sample-angular-project
```

---

## Μελλοντικές Βελτιώσεις

* Ανάλυση Angular templates
* Ανάλυση πολυπλοκότητας RxJS
* Υπολογισμός technical debt score
* Οπτικοποίηση dependency graph
* Interactive dashboard
* Ιστορική ανάλυση

---

## Στόχος Έρευνας

Στόχος του έργου είναι η διερεύνηση της σχέσης μεταξύ μετρικών λογισμικού, συντηρησιμότητας και τεχνικού χρέους σε εφαρμογές Angular.

---

## Τεχνολογίες

* Node.js
* TypeScript Compiler API
* TypeScript AST
* JavaScript

---

## Author

Nikolaos Karanikolas
MSc in Applied Informatics
University of Macedonia
