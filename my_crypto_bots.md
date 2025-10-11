⚙️ Technical Specifications — My Crypto Bots

Language: Python 3.11+
Frameworks: Streamlit, FastAPI (optional integration)
Architecture: Modular MVC-inspired structure

Main Directories:

src/api/ — Exchange integrations (Binance, others via REST/WebSocket)

src/bots/ — Core trading logic and bot definitions

src/dashboard/ — Streamlit UI components and app logic

src/strategies/ — Algorithmic trading strategies (scalping, DCA, grid, etc.)

src/utils/ — Configuration loader, logger, portfolio manager, error handler

config/ — Environment and YAML configuration files

logs/ — Activity and error logging

backups/ — Portfolio and trade backups

old/ — Legacy dashboards and deprecated code

Core Dependencies:

streamlit — UI layer and dashboard control

pandas, numpy — Data manipulation

requests, aiohttp — API communication

python-dotenv — Environment variable management

pyyaml — Config parsing

loguru — Logging

schedule — Bot scheduling

ccxt — Exchange API abstraction (Binance, Coinbase, etc.)

Configuration:

.env for private keys and credentials

config.yml for global parameters (API endpoints, strategy settings, intervals)

Execution:

streamlit run src/dashboard/flynt_style_dashboard.py


Security:

Encrypted API key management via .env

Network separation between testnet and mainnet

Risk management functions per bot

Outputs / Persistence:

JSON and CSV trade logs

Real-time Streamlit visualization (positions, balances, P&L)

Testing / Monitoring:

Manual Streamlit UI validation

Logging via loguru

Future support for Pytest integration

Performance:

Lightweight dashboard runtime (<200MB memory footprint)

Asynchronous request handling (aiohttp, async strategies)

Deployment:

Local or Streamlit Cloud deployment

Optional Docker support (planned)

Project Status:

Functional MVP (~85% complete)

Modular, testnet-ready

Real exchange integration validated with Binance API