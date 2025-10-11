Italian Corner Invoice Management System — Summary

Purpose:
A complete web-based invoice management system for the Italian Corner restaurant group and associated villa accommodations. It provides realistic mock integration with the Greek AADE myDATA (tax authority) platform for validation and submission compliance.

Key Features

Multi-branch support (Restaurant + two villas)

Mock AADE myDATA validation & submission API

Customer database with CRUD functionality

Invoice history and PDF export (Greek-compliant format)

Automatic retry for failed submissions

Draft saving & restoration

Responsive UI (desktop & mobile)

Frontend Stack

React 18

Babel Standalone (in-browser JSX)

Tailwind CSS

PDFMake (PDF generation)

LocalStorage for client-side persistence

Backend Stack

Express.js (API & static file serving)

Node.js runtime

CORS support

Mock AADE backend (backendaade/aade-backend-stub.js)

Core Modules

frontendmock.jsx — Main React app managing invoice workflow, validation, and submission logic.

pdfGenerator.js — Generates professional Greek invoices with logos, tables, VAT, and totals.

aade-backend-stub.js — Simulates AADE API responses with success/failure and retry endpoints.

frontend-server.js — Static server for SPA routing and CORS handling.

Business Logic

Branch configuration for restaurant and villas

Automatic VAT calculation (13% / 24%)

Surcharge for accommodation (villa stays)

Validation of required fields and VAT formats

LocalStorage persistence: customers, history, drafts, failed queue

UI & UX

Professional Greek invoice layout

Dynamic line items and totals

Searchable customer database

History and retry panels

Fully responsive and optimized for business use

Security

Client-side only data storage (no remote persistence)

Input validation and sanitization

CORS and request size limits

Secure PDF generation and fallback handling

Performance

Optimized React components

Fast Express backend (lightweight JSON handling)

Efficient LocalStorage serialization

Lazy PDF resource loading

Future Enhancements

Real AADE API connection

Database backend

Multi-user authentication

Advanced reporting and analytics

Email/QR invoice delivery

Multilingual (EN/EL) support

Mobile app version

Status

Version: 1.0.0

Last Updated: January 2025

Compatibility: Modern browsers (ES6+)

State: Production-ready mock system

In short:
A React + Node.js invoicing system with Greek tax compliance mock backend, professional PDF output, and robust client-side management — fully functional, maintainable, and prepared for real AADE integration.