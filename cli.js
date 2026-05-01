#!/usr/bin/env node

const { spawn } = require('child_process');

console.log("=======================================");
console.log("🔴 CLONMEDIC SYSTEM (CRIMSON GENESIS)");
console.log("=======================================");

const command = process.argv[2];

if (command === 'start') {
    console.log("--> Initializing MCP Bridge...");
    require('./server.js'); 
    
    console.log("--> MCP Bridge Active.");
    console.log("--> Launching Brutalist Web OS...");
    
    import('open').then(open => {
        open.default('https://polite-lamington-b8d87d.netlify.app/');
    });

} else if (command === 'inspect') {
    console.log("--> 🛡️  Initializing MCP Inspector Sandbox...");
    console.log("--> Spawning isolated server environment...");
    
    // We spawn the npx command and inherit stdio so you see the logs perfectly
    const inspector = spawn('npx', ['@modelcontextprotocol/inspector', 'node', 'server.js'], {
        stdio: 'inherit', 
        shell: true // Required for Windows to understand 'npx'
    });

    inspector.on('error', (err) => {
        console.error("❌ Critical Error booting Inspector:", err);
    });

} else {
    console.log("⚠️ Unknown command.");
    console.log("Available commands:");
    console.log("  clonmedic start    - Boots the main OS and MCP bridge");
    console.log("  clonmedic inspect  - Boots the developer MCP Inspector tool");
}