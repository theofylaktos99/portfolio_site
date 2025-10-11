🏛️ Greconomist MVP — AI-Powered Tax & Finance Platform

Purpose:
Greconomist is an AI-driven financial management and tax advisory platform tailored for Greek users. It provides GPT-based tax advice, transaction tracking, and deadline management through a modern web interface.

Core Features

AI Tax Assistant (GPT-4o-mini) for Greek tax guidance

Financial dashboard with real-time KPIs

Income & expense transaction tracking

Tax deadline notifications (ΕΝΦΙΑ, VAT, income tax)

JWT-based secure authentication

3–6 month cash flow projections (upcoming)

Neumorphic dark-mode design, mobile-first layout

Tech Stack

Backend: FastAPI (Python 3.9+), SQLAlchemy, Pydantic v2, bcrypt, JWT

Frontend: React 19 + TypeScript + Material-UI (MUI v5)

AI Integration: OpenAI GPT-4o-mini

Database: SQLite / PostgreSQL (configurable)

Hosting: Local dev, planned Docker + Gunicorn + PostgreSQL + Vercel

Architecture Overview

backend/: FastAPI app, AI service, database models, CRUD logic

frontend/: React components, hooks, contexts, MUI theming, API service

Key Endpoints: /register, /login, /dashboard/{user_id}, /ai/chat, /ai/suggestions, /ai/history

Design System

Neumorphic dark UI using gold (#d4af37) and deep blue (#1e40af)

Responsive CSS grid, animated components, and 3D depth effects

MUI typography with clamp-based scaling for mobile

Progress

Completed (65%)

Backend, authentication, AI chat, database, and base UI

In Progress:

Tax calculators, task manager, enhanced dashboard, data import

Upcoming:

Cash flow forecasting, government API links, PDF reports, PWA app

Security

JWT auth

Password hashing (bcrypt)

CORS config

.env environment isolation

Pydantic validation

Testing & Deployment

Backend tests via pytest

Frontend tests via npm test

Swagger + Redoc docs at /docs and /redoc

Production plan: Dockerized FastAPI backend + Vercel frontend

Current Status

Version: 1.0.0-beta

Progress: 65% (MVP foundation complete)

Last Updated: September 2025

Summary:
Greconomist is a full-stack FastAPI + React + GPT-4o platform offering intelligent Greek tax and financial management. It’s in active development with strong backend structure, polished UI, and clear roadmap toward a fully automated, AI-powered tax ecosystem.