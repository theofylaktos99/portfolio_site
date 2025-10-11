🏋️‍♂️ Gym App — Technical Summary

Purpose:
A multilingual Flask-based web application for gym management and room booking, created for demo and educational use. It provides real-time gym area monitoring, workout programs, and user reservations, accessible remotely via Ngrok.

Core Features

User authentication (Member ID + password)

Multilingual interface (English & Greek)

Dashboard with member stats, live area status, and workout routines

Room booking with trainer selection and automatic pricing

REST API for gym data, workouts, and bookings

Ngrok integration for instant public access

Architecture

gym_app.py — Main Flask app (routes, templates, API)

requirements.txt — Python dependencies

start_gym_ngrok.bat / .ps1 — Auto-launch scripts

README_NGROK.md — Setup instructions

API Endpoints

/api/gym-status — Real-time area info

/api/start-workout / /api/complete-workout — Workout logs

/api/book-room / /api/cancel-booking — Booking management

/api/user-bookings — Current user’s reservations

/api/available-slots/<room_id> — Available times per room

Tech Stack

Python 3, Flask, Jinja2, pyngrok

HTML, CSS, JavaScript (responsive interface)

Security Notes

In-memory storage (no database)

Basic authentication, not production-grade

HTTPS and persistent storage required for real deployment

Status

Functional demo (100% local + Ngrok-ready)

Stable UI and logic

Educational proof-of-concept, not production-ready

In short:
A functional Flask + Ngrok gym management app supporting real-time room status, multilingual dashboards, and booking API — ideal as a learning project or internal demo, requiring database and security upgrades for production use.