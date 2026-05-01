# 🖥️ ClonMedic: Omni-Channel Medical Ecosystem
**Made by Shree Kale | Version: ClonMed v1.0 (Build: Crimson Genesis)**

Welcome to the ClonMedic Ecosystem. This project is built on a "Compile-Once, Run-Anywhere" architecture. Whether you are running the Native Windows Client, the Brutalist Web OS, or standard Chrome, you are interacting with the exact same unified physics engine and simulation hub. 

This README provides the complete navigation workflow and developer setup instructions.

---

## 🔗 Quick Links

*   **🌐 Main Web OS (Entry Point):** [https://polite-lamington-b8d87d.netlify.app/](https://polite-lamington-b8d87d.netlify.app/)
*   **🩺 Web Simulation Hub (Direct):** [https://taupe-druid-86622d.netlify.app/](https://taupe-druid-86622d.netlify.app/)
*   **📥 Native Download Portal:** [https://super-crisp-af6236.netlify.app/](https://super-crisp-af6236.netlify.app/)

---

## 🧭 Navigation Workflow: How to Use the OS

The best way to experience ClonMedic is through our custom Neo-Brutalist Web OS. Here is the exact user flow:

### Step 1: Booting the OS
Navigate to the **Main Web OS** link. You will be greeted by a functional, brutalist-style search engine. You can use the search bar to index the web, but the core application is located in the central banner.

### Step 2: The Initialization Protocol
Click the massive **"Interactive Labs"** graphic in the center of the screen. This triggers the Initialization Protocol modal, presenting you with your environment choices.

### Step 3: Environment Selection (The 4 Options)
You will see a grid of buttons. Depending on how you want to run the app, choose one of the following:

**Option 1: Download the Native Client**
*   **The Big Blue Button:** Opens the Native Download Portal *inside a new tab within the Brutalist Web OS*.
*   **The Small Chrome Button (below it):** Breaks out of the OS and opens the Download Portal in a brand-new, external browser tab.

**Option 2: Run in the Web Environment**
*   **The Big White Button:** Injects the Web Simulation Hub directly *into your active Brutalist Web OS window*.
*   **The Small Chrome Button (below it):** Breaks out of the OS and opens the Web Simulation Hub in a brand-new, external browser tab.

*(Note: Because of our Omni-Channel architecture, the simulation is the exact same application regardless of which environment you choose).*

---

## 💻 Installing the Windows Native Client

If you chose to download the native application via the Download Portal:
1. Navigate to the [Download Portal](https://super-crisp-af6236.netlify.app/).
2. Go to the **Releases** section on the page.
3. Click on `clonmed.exe` to start the download.
4. Once downloaded, double-click the `.exe` file to launch the standalone medical simulator directly on your desktop.

---

## 🛠️ Developer Guide: Running the MCP Inspector

ClonMedic uses an AI Compiler powered by the Model Context Protocol (MCP) to translate English medical commands into physics engine triggers. To test the backend tools and AI logic, you can run the MCP Inspector locally.

### Setup Instructions

1. **Download the Server Folder:** Clone or download the MCP server folder to your local machine.
2. **Open Terminal:** Navigate into the downloaded folder using your terminal or command prompt.
3. **Install Dependencies & Start the Inspector:** Run the following commands:
```bash
# Install required packages
npm install

# Build the server (if required by your setup)
npm run build

# Boot the MCP Inspector
npx @modelcontextprotocol/inspector node build/index.js
