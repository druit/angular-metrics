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
* Automatic Angular artifact detection

---

## Supported Metrics

* LOC (Lines of Code)
* SLOC (Source Lines of Code)
* NOM (Number of Methods)
* NOP (Number of Properties)
* NPM (Number of Public Methods)
* WMC (Weighted Methods per Class)
* WMC* / AMC (Average Method Complexity)
* RFC (Response For a Class)
* CBO (Coupling Between Objects)
* LCOM (Lack of Cohesion of Methods)
* MPC (Message Passing Coupling)
* DIT (Depth of Inheritance Tree)
* NOCC (Number of Children Classes)
* DAC (Data Abstraction Coupling)
* Fan-In / Fan-Out

These metrics are also utilized for maintainability analysis and code smell detection.

---

## Code Smell Detection

The analyzer supports rule-based maintainability and code smell detection using configurable metric thresholds.

Detected smells include:

* Large File
* Large Class
* High Complexity
* High RFC
* High Coupling
* High FanOut
* High Message Passing
* Deep Inheritance Tree
* Too Many Properties
* Too Many Child Classes
* High Data Coupling
* Low Cohesion

---

## Current Capabilities

The analyzer currently supports:

* AST-based static analysis
* Angular-aware file detection
* CK and maintainability metrics extraction
* CSV and JSON report generation
* Project-level summary statistics
* Angular artifact statistics
* Rule-based smell detection
* Configurable maintainability thresholds
* Fan-In / Fan-Out analysis
* Inheritance analysis
* Maintainability warnings

---

## Supported Angular Files

The analyzer automatically detects Angular-related TypeScript files containing keywords such as:

```text
component
service
guard
interceptor
directive
pipe
```

---

## Installation

```bash
npm install
```

---

## Usage

Add the following script inside `package.json`:

```json
"scripts": {
  "start": "node index.js"
}
```

Run the analyzer:

```bash
npm start "D:/Projects/your-angular-project"
```

Example:

```bash
npm start "D:/Projects/greekspot_cms"
```

---

## Output

Analysis reports are automatically generated inside the `output/` directory.

Generated files include:

* CSV metrics reports
* JSON structured analysis reports
* Summary statistics
* Angular artifact statistics
* Maintainability smell statistics
* Angular type classification

Example:

```text
output/
├── greekspot_cms-metrics.csv
└── metrics-report.json
```

Example JSON structure:

```json
{
  "project": "greekspot_cms",

  "summary": {
    "totalClasses": 36
  },

  "classes": [
    {
      "name": "MenuManagerComponent",

      "type": "component",

      "LOC": 644,

      "RFC": 107,

      "smells": [
        "Large File",
        "High RFC"
      ]
    }
  ]
}
```

---

## Future Improvements

* Angular template analysis
* RxJS complexity analysis
* Dependency graph visualization
* Technical debt scoring
* Interactive dashboard
* Historical project analysis
* Trend analysis between project versions
* Correlation between metrics and maintenance effort

---

## Research Goal

The goal of this research is to investigate software maintainability, complexity and technical debt indicators in Angular applications through AST-based static analysis and software metrics extraction.

The project also aims to explore possible correlations between software metrics, maintainability issues and software maintenance effort estimation.

---

## Technologies

* Node.js
* JavaScript
* TypeScript Compiler API
* TypeScript AST
* ts-morph

---

## Author

Nikolaos Karanikolas
MSc in Applied Informatics
University of Macedonia

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
* Αυτόματος εντοπισμός Angular artifacts

---

## Υποστηριζόμενες Μετρικές

* LOC (Γραμμές Κώδικα)
* SLOC
* NOM
* NOP
* NPM
* WMC
* WMC* / AMC
* RFC
* CBO
* LCOM
* MPC
* DIT
* NOCC
* DAC
* Fan-In / Fan-Out

Οι μετρικές αυτές χρησιμοποιούνται επίσης για maintainability analysis και code smell detection.

---

## Ανίχνευση Code Smells

Το εργαλείο υποστηρίζει rule-based maintainability και code smell detection μέσω configurable metric thresholds.

Υποστηρίζονται smells όπως:

* Large File
* Large Class
* High Complexity
* High RFC
* High Coupling
* High FanOut
* High Message Passing
* Deep Inheritance Tree
* Too Many Properties
* Too Many Child Classes
* High Data Coupling
* Low Cohesion

---

## Τρέχουσες Δυνατότητες

Το εργαλείο υποστηρίζει:

* AST-based static analysis
* Angular-aware ανάλυση αρχείων
* Εξαγωγή CK και maintainability metrics
* CSV και JSON report generation
* Summary statistics σε επίπεδο project
* Angular artifact statistics
* Rule-based smell detection
* Configurable maintainability thresholds
* Fan-In / Fan-Out analysis
* Inheritance analysis
* Maintainability warnings

---

## Υποστηριζόμενα Angular Αρχεία

Το εργαλείο εντοπίζει αυτόματα Angular TypeScript αρχεία που περιέχουν λέξεις όπως:

```text
component
service
guard
interceptor
directive
pipe
```

---

## Εγκατάσταση

```bash
npm install
```

---

## Χρήση

Προσθέστε το παρακάτω script στο `package.json`:

```json
"scripts": {
  "start": "node index.js"
}
```

Εκτέλεση analyzer:

```bash
npm start "D:/Projects/your-angular-project"
```

Παράδειγμα:

```bash
npm start "D:/Projects/greekspot_cms"
```

---

## Output

Οι αναφορές δημιουργούνται αυτόματα μέσα στον φάκελο `output/`.

Παράγονται:

* CSV reports με metrics
* JSON structured reports
* Summary statistics
* Angular artifact statistics
* Maintainability smell statistics
* Angular type classification

Παράδειγμα:

```text
output/
├── greekspot_cms-metrics.csv
└── metrics-report.json
```

Παράδειγμα JSON structure:

```json
{
  "project": "greekspot_cms",

  "summary": {
    "totalClasses": 36
  },

  "classes": [
    {
      "name": "MenuManagerComponent",

      "type": "component",

      "LOC": 644,

      "RFC": 107,

      "smells": [
        "Large File",
        "High RFC"
      ]
    }
  ]
}
```

---

## Μελλοντικές Βελτιώσεις

* Ανάλυση Angular templates
* Ανάλυση πολυπλοκότητας RxJS
* Οπτικοποίηση dependency graph
* Υπολογισμός technical debt score
* Interactive dashboard
* Ιστορική ανάλυση project
* Trend analysis μεταξύ εκδόσεων
* Συσχέτιση metrics με maintenance effort

---

## Στόχος Έρευνας

Στόχος της έρευνας είναι η διερεύνηση της συντηρησιμότητας, της πολυπλοκότητας και πιθανών δεικτών τεχνικού χρέους σε εφαρμογές Angular μέσω AST-based static analysis και εξαγωγής μετρικών λογισμικού.

Παράλληλα, το έργο στοχεύει στη μελέτη πιθανής συσχέτισης μεταξύ software metrics, maintainability issues και effort estimation κατά τη συντήρηση λογισμικού.

---

## Τεχνολογίες

* Node.js
* JavaScript
* TypeScript Compiler API
* TypeScript AST
* ts-morph

---

## Author

Nikolaos Karanikolas
MSc in Applied Informatics
University of Macedonia
