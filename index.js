<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proposal for LunaCraft Studio | Jetweb Labs</title>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&family=Nunito:wght@300;400;600;700;800&family=Pacifico&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- FontAwesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- Tailwind Configuration -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        luna: {
                            lavender: '#E6E6FA',
                            lavenderDark: '#D8BFD8',
                            pink: '#FFB7B2',
                            pinkDeep: '#FF9E99',
                            cream: '#FFFDD0',
                            blue: '#B5EAD7',
                            text: '#4A4A4A',
                            accent: '#C7CEEA'
                        }
                    },
                    fontFamily: {
                        sans: ['Nunito', 'sans-serif'],
                        display: ['Fredoka', 'sans-serif'],
                        script: ['Pacifico', 'cursive'],
                    },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'float-delayed': 'float 6s ease-in-out 3s infinite',
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'bounce-soft': 'bounce-soft 2s infinite',
                        'spin-slow': 'spin 12s linear infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-20px)' },
                        },
                        'bounce-soft': {
                            '0%, 100%': { transform: 'translateY(-5%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
                            '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
                        }
                    }
                }
            }
        }
    </script>

    <style>
        /* Custom Styles & Utilities */
        body {
            background-color: #FAFAFA;
            overflow-x: hidden;
        }

        .glass-panel {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.8);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
        }

        .gradient-text {
            background: linear-gradient(135deg, #FFB7B2 0%, #D8BFD8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        /* Scrollbar Customization */
        ::-webkit-scrollbar {
            width: 10px;
        }
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
            background: #D8BFD8;
            border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #FFB7B2;
        }

        /* Drag and Drop Specifics */
        .draggable-item {
            cursor: grab;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            touch-action: none;
        }
        .draggable-item:active {
            cursor: grabbing;
            transform: scale(1.05);
        }
        .drop-zone {
            transition: all 0.3s ease;
        }
        .drop-zone.drag-over {
            background-color: rgba(181, 234, 215, 0.3);
            border-color: #B5EAD7;
            transform: scale(1.02);
        }

        /* SVG Animations */
        .dreamcatcher-web {
            transform-origin: center;
            animation: spin-slow 20s linear infinite;
        }

        /* Chat Bubbles */
        .chat-bubble {
            opacity: 0;
            transform: translateY(20px);
            animation: popIn 0.5s forwards;
        }

        @keyframes popIn {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Hero Canvas */
        #hero-canvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            pointer-events: none;
        }

        /* Interactive Elements */
        .interactive-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .interactive-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px -5px rgba(0,0,0,0.1);
        }

        .confetti {
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: #f00;
            animation: fall linear forwards;
        }

        @keyframes fall {
            to {
                transform: translateY(100vh) rotate(720deg);
            }
        }

        /* Custom Checkbox */
        .toggle-checkbox:checked {
            right: 0;
            border-color: #68D391;
        }
        .toggle-checkbox:checked + .toggle-label {
            background-color: #68D391;
        }
    </style>
</head>
<body class="text-luna-text antialiased selection:bg-luna-pink selection:text-white">

    <!-- NAV BAR -->
    <nav class="fixed top-0 w-full z-50 glass-panel border-b border-white/50 transition-all duration-300" id="navbar">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <div class="flex items-center space-x-3">
                    <div class="bg-gray-900 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold font-display text-xl">J</div>
                    <div class="hidden md:block">
                        <span class="text-xs font-bold uppercase tracking-widest text-gray-400 block">Proposal For</span>
                        <span class="text-xl font-script text-luna-pinkDeep">LunaCraft Studio</span>
                    </div>
                </div>
                <div class="hidden md:flex space-x-8">
                    <a href="#bottleneck" class="text-gray-500 hover:text-luna-pinkDeep font-semibold transition">The Bottleneck</a>
                    <a href="#simulation" class="text-gray-500 hover:text-luna-pinkDeep font-semibold transition">The Solution</a>
                    <a href="#investment" class="text-gray-500 hover:text-luna-pinkDeep font-semibold transition">Investment</a>
                </div>
                <button onclick="document.getElementById('investment').scrollIntoView({behavior: 'smooth'})" class="bg-gradient-to-r from-luna-pink to-luna-lavenderDark text-white px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition">
                    Start Building
                </button>
            </div>
        </div>
    </nav>

    <!-- SECTION 1: HERO -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <canvas id="hero-canvas"></canvas>
        
        <div class="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <div class="inline-block mb-4 px-4 py-1 rounded-full bg-white/80 border border-luna-lavender text-luna-lavenderDark font-bold text-sm tracking-wider uppercase animate-float">
                Project: Digital Transformation
            </div>
            <h1 class="text-5xl md:text-7xl font-display font-bold mb-6 text-gray-800 leading-tight">
                Your Art is Unique.<br>
                <span class="gradient-text">Your Sales Should Be Effortless.</span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto font-light">
                Devansh here from Jetweb Labs. We want to turn your Instagram DM chaos into a beautiful, automated <span class="font-script text-luna-pinkDeep text-3xl">Design Studio</span>.
            </p>
            
            <div class="flex flex-col md:flex-row justify-center gap-4">
                <button onclick="document.getElementById('simulation').scrollIntoView({behavior: 'smooth'})" class="group bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-gray-800 transition flex items-center justify-center gap-2">
                    Try The Simulation
                    <i class="fas fa-magic group-hover:rotate-12 transition-transform"></i>
                </button>
                <button onclick="document.getElementById('bottleneck').scrollIntoView({behavior: 'smooth'})" class="bg-white text-gray-800 border border-gray-200 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-50 transition">
                    See The Problem
                </button>
            </div>
        </div>

        <!-- Decorative Floating Elements -->
        <div class="absolute top-1/4 left-10 w-24 h-24 bg-luna-pink/20 rounded-full blur-xl animate-float-delayed"></div>
        <div class="absolute bottom-1/4 right-10 w-32 h-32 bg-luna-blue/20 rounded-full blur-xl animate-float"></div>
    </section>

    <!-- SECTION 2: THE BOTTLENECK (DM MAZE) -->
    <section id="bottleneck" class="py-24 bg-white relative">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-display font-bold text-gray-800 mb-4">The Current Reality</h2>
                <p class="text-lg text-gray-500 max-w-2xl mx-auto">
                    You are spending 80% of your time answering the same questions in DMs, and only 20% actually crafting. This is the "DM Maze."
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Left: The Problem (Chat Simulation) -->
                <div class="relative">
                    <div class="absolute -inset-4 bg-gradient-to-r from-red-100 to-orange-100 rounded-3xl blur-lg opacity-70"></div>
                    <div class="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden h-[500px] flex flex-col">
                        <div class="bg-gray-50 p-4 border-b flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <div class="w-3 h-3 rounded-full bg-red-400"></div>
                                <span class="font-bold text-gray-700">Instagram DMs (99+ Requests)</span>
                            </div>
                            <span class="text-xs text-gray-400">Now</span>
                        </div>
                        <div id="chat-container" class="flex-1 p-6 overflow-y-auto space-y-4 bg-gray-50/50">
                            <!-- JS will populate this -->
                        </div>
                        <div class="p-4 bg-white border-t">
                            <div class="h-10 bg-gray-100 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                    <!-- Overlays -->
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white px-6 py-3 rounded-full font-bold shadow-xl rotate-12 z-20 hidden" id="burnout-badge">
                        ERROR: BURNOUT IMMINENT
                    </div>
                </div>

                <!-- Right: The Solution Explanation -->
                <div class="space-y-8">
                    <div class="flex gap-4 items-start">
                        <div class="w-12 h-12 rounded-2xl bg-red-100 text-red-500 flex items-center justify-center text-xl flex-shrink-0">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-gray-800">The Time Drain</h3>
                            <p class="text-gray-600 mt-2">"Can you show me the pink one?" "Do you have chocolates?" "What is the price for 3 items?" You repeat this 50 times a day.</p>
                        </div>
                    </div>
                    
                    <div class="flex gap-4 items-start">
                        <div class="w-12 h-12 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center text-xl flex-shrink-0">
                            <i class="fas fa-calculator"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-gray-800">Manual Quotes</h3>
                            <p class="text-gray-600 mt-2">Calculating prices manually on a calculator for every custom hamper leads to errors and slow replies.</p>
                        </div>
                    </div>

                    <div class="flex gap-4 items-start">
                        <div class="w-12 h-12 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center text-xl flex-shrink-0">
                            <i class="fas fa-arrow-right"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-gray-800">The Jetweb Fix</h3>
                            <p class="text-gray-600 mt-2">We build a <b>Visual Configurator</b>. The client builds the hamper, sees the price instantly, and pays. You just receive the order sheet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 3: THE SIMULATION (CORE FEATURE) -->
    <section id="simulation" class="py-24 bg-luna-lavender/20 relative overflow-hidden">
        <!-- Background Decor -->
        <div class="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        
        <div class="max-w-7xl mx-auto px-4 relative z-10">
            <div class="text-center mb-12">
                <span class="text-luna-pinkDeep font-bold tracking-widest uppercase text-sm">Interactive Prototype</span>
                <h2 class="text-4xl md:text-5xl font-display font-bold text-gray-800 mt-2">The Luna Design Studio</h2>
                <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
                    This is a functional preview of what we will build. Try building a hamper below.
                </p>
            </div>

            <!-- The Application Container -->
            <div class="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-white/60 min-h-[700px] flex flex-col md:flex-row">
                
                <!-- Sidebar Nav -->
                <div class="w-full md:w-24 bg-gray-50 border-r border-gray-100 flex md:flex-col items-center py-6 gap-6 justify-center md:justify-start">
                    <button class="app-tab active w-12 h-12 rounded-xl flex items-center justify-center text-gray-400 hover:text-luna-pinkDeep hover:bg-luna-pink/10 transition" data-target="hamper-lab" title="Hamper Lab">
                        <i class="fas fa-gift text-xl"></i>
                    </button>
                    <button class="app-tab w-12 h-12 rounded-xl flex items-center justify-center text-gray-400 hover:text-luna-pinkDeep hover:bg-luna-pink/10 transition" data-target="dreamcatcher-studio" title="Dreamcatcher Studio">
                        <i class="fas fa-wind text-xl"></i>
                    </button>
                    <button class="app-tab w-12 h-12 rounded-xl flex items-center justify-center text-gray-400 hover:text-luna-pinkDeep hover:bg-luna-pink/10 transition" data-target="settings" title="Settings">
                        <i class="fas fa-cog text-xl"></i>
                    </button>
                </div>

                <!-- Main Work Area -->
                <div class="flex-1 bg-white relative">
                    
                    <!-- TAB 1: HAMPER LAB -->
                    <div id="hamper-lab" class="app-view p-6 h-full flex flex-col lg:flex-row gap-8">
                        
                        <!-- Inventory (Left) -->
                        <div class="w-full lg:w-1/3 flex flex-col h-full">
                            <h3 class="font-display font-bold text-xl text-gray-700 mb-4">Pick Your Items</h3>
                            <div class="bg-gray-50 rounded-2xl p-4 flex-1 overflow-y-auto">
                                <div class="grid grid-cols-2 gap-3" id="inventory-grid">
                                    <!-- Items Generated by JS -->
                                </div>
                            </div>
                        </div>

                        <!-- The Builder (Center) -->
                        <div class="w-full lg:w-1/3 flex flex-col items-center justify-center relative">
                            <h3 class="font-display font-bold text-xl text-gray-700 mb-4 absolute top-0">Drag to Box</h3>
                            
                            <!-- The Box -->
                            <div id="hamper-box" class="drop-zone w-64 h-64 md:w-80 md:h-80 bg-luna-cream border-4 border-dashed border-luna-pink/50 rounded-3xl flex items-center justify-center relative transition-all">
                                <div class="absolute inset-0 flex items-center justify-center text-luna-pink/30 pointer-events-none">
                                    <i class="fas fa-plus text-4xl"></i>
                                </div>
                                <!-- Dropped Items will appear here absolutely positioned -->
                                <div id="dropped-items-container" class="absolute inset-4 overflow-hidden rounded-2xl"></div>
                            </div>

                            <p class="text-sm text-gray-400 mt-4 text-center">Your Custom Hamper</p>
                        </div>

                        <!-- Summary (Right) -->
                        <div class="w-full lg:w-1/3 bg-gray-900 text-white rounded-2xl p-6 flex flex-col justify-between shadow-xl">
                            <div>
                                <h3 class="font-display font-bold text-xl mb-6">Order Summary</h3>
                                <div id="receipt-list" class="space-y-3 text-sm text-gray-300 max-h-60 overflow-y-auto">
                                    <p class="italic text-gray-500">Box is empty...</p>
                                </div>
                            </div>
                            <div class="border-t border-gray-700 pt-4 mt-4">
                                <div class="flex justify-between items-center mb-4">
                                    <span class="text-gray-400">Total</span>
                                    <span class="text-2xl font-bold text-luna-blue" id="total-price">₹0</span>
                                </div>
                                <button id="checkout-btn" class="w-full bg-luna-pink hover:bg-luna-pinkDeep text-white font-bold py-3 rounded-xl transition shadow-lg shadow-luna-pink/30">
                                    Checkout via WhatsApp
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- TAB 2: DREAMCATCHER STUDIO -->
                    <div id="dreamcatcher-studio" class="app-view hidden p-6 h-full flex flex-col lg:flex-row gap-8 items-center justify-center">
                        <div class="w-full lg:w-1/2 flex flex-col items-center">
                            <div class="relative w-80 h-80 lg:w-96 lg:h-96">
                                <!-- SVG Dreamcatcher -->
                                <svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-xl" id="dreamcatcher-svg">
                                    <!-- Outer Ring -->
                                    <circle id="dc-ring" cx="100" cy="80" r="60" fill="none" stroke="#E6E6FA" stroke-width="8" />
                                    <!-- Inner Web -->
                                    <g id="dc-web" class="dreamcatcher-web origin-center">
                                        <path d="M100 20 L140 50 L140 110 L100 140 L60 110 L60 50 Z" fill="none" stroke="#FFF" stroke-width="2" opacity="0.8"/>
                                        <path d="M100 35 L125 55 L125 105 L100 125 L75 105 L75 55 Z" fill="none" stroke="#FFF" stroke-width="1.5" opacity="0.6"/>
                                        <circle cx="100" cy="80" r="5" fill="#FFF" />
                                    </g>
                                    <!-- Feathers -->
                                    <g id="dc-feathers">
                                        <path id="feather-1" d="M60 130 Q 50 160 40 190 Q 50 185 60 190 Q 65 160 60 130" fill="#FFB7B2" />
                                        <path id="feather-2" d="M100 145 Q 100 170 100 195 Q 105 190 110 195 Q 110 170 100 145" fill="#B5EAD7" />
                                        <path id="feather-3" d="M140 130 Q 150 160 160 190 Q 150 185 140 190 Q 135 160 140 130" fill="#FFB7B2" />
                                    </g>
                                    <!-- Threads -->
                                    <line x1="60" y1="130" x2="60" y2="110" stroke="#ccc" stroke-width="2"/>
                                    <line x1="100" y1="145" x2="100" y2="140" stroke="#ccc" stroke-width="2"/>
                                    <line x1="140" y1="130" x2="140" y2="110" stroke="#ccc" stroke-width="2"/>
                                </svg>
                            </div>
                        </div>
                        
                        <div class="w-full lg:w-1/2 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                            <h3 class="font-display font-bold text-2xl text-gray-800 mb-6">Customize Your Vibe</h3>
                            
                            <div class="mb-6">
                                <label class="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">Ring Color</label>
                                <div class="flex gap-3" id="ring-colors">
                                    <!-- JS Generated -->
                                </div>
                            </div>

                            <div class="mb-6">
                                <label class="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">Feather Accent</label>
                                <div class="flex gap-3" id="feather-colors">
                                    <!-- JS Generated -->
                                </div>
                            </div>

                            <div class="p-4 bg-luna-lavender/20 rounded-xl">
                                <p class="text-sm text-gray-600 mb-1">Estimated Price</p>
                                <p class="text-2xl font-bold text-gray-800">₹899 <span class="text-xs font-normal text-gray-500">(Custom Commission)</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION 4: PRICING (THE INVESTMENT) -->
    <section id="investment" class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-display font-bold text-gray-800">Investment Plans</h2>
                <p class="text-lg text-gray-500 mt-2">Scalable solutions for your growing empire. <span class="text-luna-pinkDeep font-bold">Limited Time 50% OFF!</span></p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                
                <!-- Plan 1 -->
                <div class="interactive-card bg-white border border-gray-200 rounded-3xl p-8 relative overflow-hidden">
                    <h3 class="font-script text-3xl text-gray-400 mb-2">The Crafter</h3>
                    <div class="flex items-baseline mb-6">
                        <span class="line-through text-gray-400 text-xl mr-2">₹24,999</span>
                        <span class="text-4xl font-bold text-gray-800">₹12,499</span>
                    </div>
                    <ul class="space-y-4 mb-8 text-gray-600">
                        <li class="flex items-center gap-2"><i class="fas fa-check text-green-400"></i> Aesthetic Portfolio Site</li>
                        <li class="flex items-center gap-2"><i class="fas fa-check text-green-400"></i> WhatsApp Order Generator</li>
                        <li class="flex items-center gap-2"><i class="fas fa-check text-green-400"></i> Basic SEO Setup</li>
                        <li class="flex items-center gap-2"><i class="fas fa-check text-green-400"></i> 1 Month Support</li>
                    </ul>
                    <button class="w-full py-3 rounded-xl border-2 border-gray-200 font-bold text-gray-500 hover:border-gray-800 hover:text-gray-800 transition">Select Plan</button>
                </div>

                <!-- Plan 2 (Featured) -->
                <div class="interactive-card bg-gray-900 text-white rounded-3xl p-8 relative overflow-hidden transform md:-translate-y-4 shadow-2xl">
                    <div class="absolute top-0 right-0 bg-luna-pink text-white text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">Most Popular</div>
                    <h3 class="font-script text-3xl text-luna-blue mb-2">The Studio</h3>
                    <div class="flex items-baseline mb-6">
                        <span class="line-through text-gray-500 text-2xl mr-2">₹49,999</span>
                        <span class="text-5xl font-bold text-white">₹24,999</span>
                    </div>
                    <p class="text-gray-400 text-sm mb-6 border-b border-gray-700 pb-4">Includes the "Hamper Builder" simulation shown above.</p>
                    <ul class="space-y-4 mb-8 text-gray-300">
                        <li class="flex items-center gap-2"><i class="fas fa-check text-luna-pink"></i> <b>Interactive Hamper Builder</b></li>
                        <li class="flex items-center gap-2"><i class="fas fa-check text-luna-pink"></i> Inventory Management</li>
                        <li class="flex items-center gap-2"><i class="fas fa-check text-luna-pink"></i> Dreamcatcher Customizer</li>
                        <li class="flex items-center gap-2"><i class="fas fa-check text-luna-pink"></i> 3 Month Priority Support</li>
                    </ul>
                    <button onclick="handleContact('Studio Plan')" class="w-full py-4 rounded-xl bg-gradient-to-r from-luna-pink to-luna-pinkDeep font-bold text-white shadow-lg hover:shadow-luna-pink/50 transition">Transform My Business</button>
                </div>

                <!-- Plan 3 -->
                <div class="interactive-card bg-white border border-gray-200 rounded-3xl p-8 relative overflow-hidden">
                    <h3 class="font-script text-3xl text-luna-lavenderDark mb-2">The Brand</h3>
                    <div class="flex items-baseline mb-6">
                        <span class="line-through text-gray-400 text-xl mr-2">₹89,999</span>
                        <span class="text-4xl font-bold text-gray-800">₹44,999</span>
                    </div>
                    <ul class="space-y-4 mb-8 text-gray-600">
                        <li class="flex items-center gap-2"><i class="fas fa-check text-green-400"></i> Everything in Studio</li>
                        <li class="flex items-center gap-2"><i class="fas fa-check text-green-400"></i> <b>Native Mobile App</b> (iOS/Android)</li>
                        <li class="flex items-center gap-2"><i class="fas fa-check text-green-400"></i> Auto-Shipping Integration</li>
                        <li class="flex items-center gap-2"><i class="fas fa-check text-green-400"></i> 1 Year Marketing Strategy</li>
                    </ul>
                    <button class="w-full py-3 rounded-xl border-2 border-gray-200 font-bold text-gray-500 hover:border-gray-800 hover:text-gray-800 transition">Select Plan</button>
                </div>

            </div>
        </div>
    </section>

    <!-- SECTION 5: CTA -->
    <section class="py-20 bg-gradient-to-br from-luna-lavender to-white text-center relative overflow-hidden">
        <div class="max-w-4xl mx-auto px-4 relative z-10">
            <h2 class="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-6">Ready to scale LunaCraft?</h2>
            <p class="text-xl text-gray-600 mb-10">
                Don't let manual DMs kill your creativity. Let's build a system that sells *for* you while you sleep.
            </p>
            <div class="flex flex-col md:flex-row justify-center items-center gap-4">
                <a href="mailto:devansh@jetweblabs.com?subject=Lets%20Build%20LunaCraft" class="bg-gray-900 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-gray-800 transition transform hover:scale-105">
                    Start Project Now
                </a>
                <span class="text-gray-500 text-sm">Or call +91 98765 43210</span>
            </div>
        </div>
        
        <!-- Footer Info -->
        <div class="mt-20 border-t border-gray-200 pt-8 text-gray-400 text-sm">
            <p>Made with <i class="fas fa-heart text-red-400"></i> by Devansh Biyani @ Jetweb Labs.</p>
            <p class="mt-2">Exclusively for LunaCraft Studio (lunacraftstudio05).</p>
        </div>
    </section>

    <!-- LOGIC SCRIPT -->
    <script>
        // --- 1. HERO CANVAS ANIMATION ---
        class HeroBackground {
            constructor() {
                this.canvas = document.getElementById('hero-canvas');
                this.ctx = this.canvas.getContext('2d');
                this.resize();
                this.bubbles = [];
                this.initBubbles();
                
                window.addEventListener('resize', () => this.resize());
                this.animate();
            }

            resize() {
                this.canvas.width = window.innerWidth;
                this.canvas.height = window.innerHeight;
            }

            initBubbles() {
                const colors = ['#E6E6FA', '#FFB7B2', '#B5EAD7', '#FFFDD0'];
                for(let i = 0; i < 20; i++) {
                    this.bubbles.push({
                        x: Math.random() * this.canvas.width,
                        y: Math.random() * this.canvas.height,
                        r: Math.random() * 50 + 20,
                        dx: (Math.random() - 0.5) * 0.5,
                        dy: (Math.random() - 0.5) * 0.5,
                        color: colors[Math.floor(Math.random() * colors.length)]
                    });
                }
            }

            animate() {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                
                this.bubbles.forEach(b => {
                    b.x += b.dx;
                    b.y += b.dy;

                    if(b.x < -50) b.x = this.canvas.width + 50;
                    if(b.x > this.canvas.width + 50) b.x = -50;
                    if(b.y < -50) b.y = this.canvas.height + 50;
                    if(b.y > this.canvas.height + 50) b.y = -50;

                    this.ctx.beginPath();
                    this.ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
                    this.ctx.fillStyle = b.color;
                    this.ctx.globalAlpha = 0.4;
                    this.ctx.filter = 'blur(20px)';
                    this.ctx.fill();
                    this.ctx.filter = 'none';
                });

                requestAnimationFrame(() => this.animate());
            }
        }

        // --- 2. CHAT SIMULATION (THE PROBLEM) ---
        class ChatSimulation {
            constructor() {
                this.container = document.getElementById('chat-container');
                this.messages = [
                    "Hi! Price for hamper?",
                    "Can you make it blue?",
                    "Do you have KitKat?",
                    "Shipping to Mumbai?",
                    "Hello??",
                    "Is this customizable?",
                    "How much for 2?",
                    "Can you add a bear?",
                    "Waiting for reply...",
                    "Pls check DM"
                ];
                this.currentIndex = 0;
                this.active = false;
                
                // Observer to start animation when visible
                const observer = new IntersectionObserver((entries) => {
                    if(entries[0].isIntersecting && !this.active) {
                        this.active = true;
                        this.startChat();
                    }
                });
                observer.observe(document.getElementById('bottleneck'));
            }

            startChat() {
                const addMessage = () => {
                    if(this.currentIndex >= this.messages.length) {
                        this.currentIndex = 0; // Loop
                         // document.getElementById('burnout-badge').classList.remove('hidden'); // Optional effect
                    }

                    const msgDiv = document.createElement('div');
                    msgDiv.className = 'chat-bubble bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm text-sm text-gray-600 max-w-[80%]';
                    msgDiv.innerText = this.messages[this.currentIndex];
                    
                    this.container.appendChild(msgDiv);
                    this.container.scrollTop = this.container.scrollHeight;
                    
                    // Limit total bubbles in DOM
                    if(this.container.children.length > 8) {
                        this.container.removeChild(this.container.firstChild);
                    }

                    this.currentIndex++;
                    
                    // Random interval for realism
                    setTimeout(addMessage, Math.random() * 1000 + 500);
                };
                addMessage();
            }
        }

        // --- 3. HAMPER BUILDER LOGIC (THE SOLUTION) ---
        const INVENTORY = [
            { id: 1, name: 'Teddy Bear', price: 499, icon: 'fa-paw', color: 'bg-amber-100 text-amber-600' },
            { id: 2, name: 'Ferrero Rocher', price: 899, icon: 'fa-circle', color: 'bg-yellow-100 text-yellow-600' },
            { id: 3, name: 'Scented Candle', price: 350, icon: 'fa-fire', color: 'bg-red-100 text-red-400' },
            { id: 4, name: 'Instax Mini', price: 5999, icon: 'fa-camera', color: 'bg-blue-100 text-blue-500' },
            { id: 5, name: 'Silk Scrunchie', price: 199, icon: 'fa-ring', color: 'bg-pink-100 text-pink-500' },
            { id: 6, name: 'Resin Coaster', price: 299, icon: 'fa-star', color: 'bg-purple-100 text-purple-500' },
        ];

        class HamperBuilder {
            constructor() {
                this.inventoryGrid = document.getElementById('inventory-grid');
                this.dropZone = document.getElementById('hamper-box');
                this.droppedContainer = document.getElementById('dropped-items-container');
                this.receiptList = document.getElementById('receipt-list');
                this.totalDisplay = document.getElementById('total-price');
                this.cart = [];
                
                this.renderInventory();
                this.initDragDrop();
                this.initTouchSupport(); // Crucial for mobile
            }

            renderInventory() {
                INVENTORY.forEach(item => {
                    const el = document.createElement('div');
                    el.className = 'draggable-item p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md flex flex-col items-center gap-2 select-none';
                    el.draggable = true;
                    el.dataset.id = item.id;
                    el.innerHTML = `
                        <div class="w-10 h-10 rounded-full ${item.color} flex items-center justify-center">
                            <i class="fas ${item.icon}"></i>
                        </div>
                        <span class="text-xs font-bold text-gray-600 text-center">${item.name}</span>
                        <span class="text-xs text-gray-400">₹${item.price}</span>
                    `;
                    el.addEventListener('dragstart', (e) => {
                        e.dataTransfer.setData('text/plain', item.id);
                        el.classList.add('opacity-50');
                    });
                    el.addEventListener('dragend', () => {
                        el.classList.remove('opacity-50');
                    });
                    this.inventoryGrid.appendChild(el);
                });
            }

            initDragDrop() {
                this.dropZone.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    this.dropZone.classList.add('drag-over');
                });

                this.dropZone.addEventListener('dragleave', () => {
                    this.dropZone.classList.remove('drag-over');
                });

                this.dropZone.addEventListener('drop', (e) => {
                    e.preventDefault();
                    this.dropZone.classList.remove('drag-over');
                    const id = e.dataTransfer.getData('text/plain');
                    if(id) this.addItemToHamper(parseInt(id));
                });
            }

            // Mobile Touch Support Logic
            initTouchSupport() {
                let activeDragItem = null;
                const items = document.querySelectorAll('.draggable-item');

                items.forEach(item => {
                    item.addEventListener('touchstart', (e) => {
                        activeDragItem = item;
                        item.classList.add('scale-105', 'opacity-75');
                    }, {passive: true});

                    item.addEventListener('touchend', (e) => {
                        if (!activeDragItem) return;
                        
                        // Check if dropped within dropzone coordinates
                        const touch = e.changedTouches[0];
                        const dropRect = this.dropZone.getBoundingClientRect();
                        
                        if (touch.clientX >= dropRect.left && 
                            touch.clientX <= dropRect.right && 
                            touch.clientY >= dropRect.top && 
                            touch.clientY <= dropRect.bottom) {
                            
                            this.addItemToHamper(parseInt(activeDragItem.dataset.id));
                        }

                        activeDragItem.classList.remove('scale-105', 'opacity-75');
                        activeDragItem = null;
                    });
                });
            }

            addItemToHamper(id) {
                const item = INVENTORY.find(i => i.id === id);
                if(!item) return;

                this.cart.push(item);
                
                // Visual Effect in Box
                const visualEl = document.createElement('div');
                visualEl.className = `absolute w-12 h-12 rounded-full ${item.color} flex items-center justify-center shadow-lg transform transition-all duration-500`;
                visualEl.innerHTML = `<i class="fas ${item.icon} text-white"></i>`;
                
                // Random Scatter Position
                const left = Math.random() * 70 + 10; // %
                const top = Math.random() * 70 + 10; // %
                const rot = Math.random() * 45 - 22;
                
                visualEl.style.left = `${left}%`;
                visualEl.style.top = `${top}%`;
                visualEl.style.transform = `rotate(${rot}deg) scale(0)`;
                
                this.droppedContainer.appendChild(visualEl);
                
                // Animate In
                setTimeout(() => {
                    visualEl.style.transform = `rotate(${rot}deg) scale(1)`;
                }, 10);

                this.updateReceipt();
                this.triggerConfetti();
            }

            updateReceipt() {
                this.receiptList.innerHTML = '';
                let total = 0;
                
                this.cart.forEach((item, index) => {
                    total += item.price;
                    const li = document.createElement('div');
                    li.className = 'flex justify-between items-center animate-pulse-once';
                    li.innerHTML = `
                        <span>${item.name}</span>
                        <span>₹${item.price}</span>
                    `;
                    this.receiptList.appendChild(li);
                });

                if(this.cart.length === 0) {
                    this.receiptList.innerHTML = '<p class="italic text-gray-500">Box is empty...</p>';
                }

                // Count Animation
                this.animateValue(this.totalDisplay, parseInt(this.totalDisplay.innerText.replace('₹','')) || 0, total, 500);
            }

            animateValue(obj, start, end, duration) {
                let startTimestamp = null;
                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    obj.innerHTML = "₹" + Math.floor(progress * (end - start) + start).toLocaleString();
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    }
                };
                window.requestAnimationFrame(step);
            }

            triggerConfetti() {
                for(let i=0; i<5; i++) {
                    const c = document.createElement('div');
                    c.className = 'confetti';
                    c.style.left = Math.random() * 100 + '%';
                    c.style.backgroundColor = ['#FFB7B2', '#E6E6FA', '#B5EAD7'][Math.floor(Math.random()*3)];
                    c.style.animationDuration = (Math.random() * 1 + 0.5) + 's';
                    this.dropZone.appendChild(c);
                    setTimeout(() => c.remove(), 1500);
                }
            }
        }

        // --- 4. DREAMCATCHER LOGIC ---
        class ProductCustomizer {
            constructor() {
                this.ring = document.getElementById('dc-ring');
                this.feathers = document.querySelectorAll('#dc-feathers path');
                this.setupControls();
            }

            setupControls() {
                const ringColors = ['#E6E6FA', '#FFB7B2', '#B5EAD7', '#333333'];
                const featherColors = ['#FFFFFF', '#FF9E99', '#A0E8D0', '#D8BFD8'];
                
                this.createSwatches('ring-colors', ringColors, (color) => {
                    this.ring.setAttribute('stroke', color);
                });

                this.createSwatches('feather-colors', featherColors, (color) => {
                    this.feathers.forEach(f => f.setAttribute('fill', color));
                });
            }

            createSwatches(containerId, colors, callback) {
                const container = document.getElementById(containerId);
                colors.forEach(color => {
                    const btn = document.createElement('button');
                    btn.className = 'w-8 h-8 rounded-full border-2 border-white shadow-sm hover:scale-110 transition ring-2 ring-transparent hover:ring-gray-200';
                    btn.style.backgroundColor = color;
                    btn.onclick = () => callback(color);
                    container.appendChild(btn);
                });
            }
        }

        // --- 5. INITIALIZATION ---
        window.addEventListener('DOMContentLoaded', () => {
            // Start Visuals
            new HeroBackground();
            new ChatSimulation();
            
            // Start Apps
            new HamperBuilder();
            new ProductCustomizer();

            // Tab Switcher
            const tabs = document.querySelectorAll('.app-tab');
            const views = document.querySelectorAll('.app-view');

            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Reset active states
                    tabs.forEach(t => {
                        t.classList.remove('active', 'text-luna-pinkDeep', 'bg-luna-pink/10');
                        t.classList.add('text-gray-400');
                    });
                    views.forEach(v => v.classList.add('hidden'));

                    // Set active
                    tab.classList.add('active', 'text-luna-pinkDeep', 'bg-luna-pink/10');
                    tab.classList.remove('text-gray-400');
                    document.getElementById(tab.dataset.target).classList.remove('hidden');
                });
            });
        });

        // Simple smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        function handleContact(plan) {
            const subject = `Inquiry about ${plan}`;
            const body = `Hi Devansh, I tried the LunaCraft simulation and I'm interested in the ${plan}.`;
            window.location.href = `mailto:devansh@jetweblabs.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        }

    </script>
</body>
</html>