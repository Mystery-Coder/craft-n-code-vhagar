# craft-n-code-vhagar

# AI-Powered Food Quality Analysis System

A blockchain-integrated solution for automated food quality assessment using image analysis and industry compliance checking. The system processes batches of food products, analyzing their visual quality and compliance with industry standards, storing results securely on the blockchain.

## 🚀 Features

-   **Image Analysis Engine**

    -   Detect spoiled/rotten fruits and vegetables using computer vision
    -   Batch processing capability
    -   Quality assessment reporting

-   **Compliance Checker**

    -   Validate product specifications against industry standards
    -   Process metadata including:
        -   Expiry dates
        -   Brand information
        -   Product details
        -   Nutritional content (sugar, fat)

-   **Blockchain Integration**

    -   Immutable storage of quality assessment results
    -   Transparent tracking of product evaluations
    -   Secure data management

-   **Web Interface**
    -   React-based user interface
    -   Image upload functionality
    -   Document submission for product specifications
    -   Interactive visualization of quality metrics

## 🛠️ Tech Stack

-   **Frontend**: React.js
-   **Image Analysis**: TensorFlow
-   **Blockchain**: Ethereum Sepolia Testnet
-   **Data Visualization**: Chart.js
-   **Backend**: Node.js

## 📋 Prerequisites

```bash
# Node.js and npm for React frontend
node >= 14.0.0
npm >= 6.14.0

# Python for image analysis
python >= 3.8
tensorflow >= 2.0.0  # or your specific ML framework

# Other dependencies will be listed in requirements.txt and package.json
```

## 🔧 Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/food-quality-analysis.git
cd food-quality-analysis
```

2. Install frontend dependencies

```bash
cd frontend
npm install
```

3. Install backend dependencies

```bash
cd backend
pip install -r requirements.txt
```

4. Configure blockchain connection

```bash
# Add your blockchain configuration in config/blockchain.js
```

## 🚦 Usage

1. Start the frontend development server:

```bash
cd frontend
npm start
```

2. Start the backend server:

```bash
cd backend
python app.py  # or your specific start command
```

3. Access the web interface at `http://localhost:3000`

### Using the System:

1. Upload a batch of images through the web interface
2. Submit accompanying product documentation
3. View analysis results and compliance reports
4. Check blockchain-stored results using the transaction viewer

## 📊 Data Flow

1. User uploads images and product documentation
2. Image Analysis Engine processes visual data
3. Compliance Checker validates product specifications
4. Results are stored on blockchain
5. Interactive charts display quality metrics

## 🔐 Security

-   All blockchain transactions are cryptographically secured
-   Image data is validated for authenticity
-   User authentication required for system access
-   Regular security audits performed

## 👥 Team

-   (Srikar Rao H M)[https://github.com/Mystery-Coder]
-   (Rahul R Raikar)[https://github.com/RahulRR-10]
-   (Samyak Rao)[https://github.com/Batista31]
-   (Rajat G A)[https://github.com/rajat-gondkar]

## 🙏 Acknowledgments

-   Utilized Azure Custom Vision
-   React.js, Flask

## 📊 Project Status

Current Version: 1.0.0
Status: In Development
