# Interactive Math Notes - Technology Plan

Based on the existing Next.js/React SSG architecture, this document outlines optimal technologies for implementing interactive features in mathematical notes, particularly for a book about convolutions.

## Interactive Features for Math Notes (Convolutions)

### 1. **Dynamic Mathematical Visualizations**
- **Convolution animations**: Interactive sliders to show how functions slide past each other
- **Signal processing widgets**: Real-time filtering demonstrations
- **Function plotting**: Interactive graphs with Desmos or custom D3.js components
- **Parameter manipulation**: Sliders to change function parameters and see real-time effects

### 2. **Interactive Problem Sets**
- **Step-by-step solutions**: Expandable solution trees with hints
- **Worked examples**: Interactive walkthroughs with user-controlled pacing
- **Practice problems**: Auto-generated variations with instant feedback
- **Progress tracking**: Visual indicators of completion and mastery

### 3. **Simulation Components**
- **Fourier transform visualizers**: Show frequency domain representations
- **Convolution calculators**: Input custom functions and see convolution results
- **Filter design tools**: Interactive frequency response plots
- **Real-world applications**: Audio processing, image filtering demos

### 4. **Assessment Tools**
- **Drag-and-drop exercises**: Order steps in proofs or algorithms
- **Interactive diagrams**: Click to label parts or trace signal flow
- **Numerical input validation**: Smart checking for mathematical expressions
- **Conceptual matching**: Connect mathematical concepts to applications

### 5. **Enhanced Navigation**
- **Concept maps**: Interactive relationships between topics
- **Prerequisites checker**: Highlight dependencies before advanced topics
- **Adaptive content**: Show/hide complexity based on user level
- **Cross-references**: Smart linking between related concepts

## Core Technologies

### **1. Mathematical Computation & Visualization**
- **Pyodide** (already planned) - Python in browser for complex math
- **Math.js** - JavaScript math library for basic calculations
- **D3.js** - Custom interactive visualizations and animations
- **Desmos API** - Professional graphing calculator embeds
- **Plotly.js** - Scientific plotting with good React integration

### **2. Interactive Components**
- **Framer Motion** - Smooth animations for mathematical transitions
- **React Spring** - Physics-based animations for convolution sliding
- **React DnD** - Drag-and-drop for ordering/matching exercises
- **React Slider** - Parameter manipulation widgets

### **3. Code Execution**
- **Pyodide** - Python scientific computing (NumPy, SciPy, Matplotlib)
- **Monaco Editor** - VS Code editor component for code blocks
- **CodeMirror** - Lightweight code editor alternative

### **4. Quiz/Assessment**
- **React Hook Form** - Form validation and state management
- **Yup** - Schema validation for mathematical expressions
- **MathQuill** - LaTeX math input widget
- **Custom React components** - Built on existing spoiler/accordion system

## Recommended Stack for Each Feature

### **Pyodide Code Runners**
```javascript
// Technologies: Pyodide + Monaco Editor + React
import { loadPyodide } from 'pyodide'
import Editor from '@monaco-editor/react'
```

### **Interactive Visualizations**
```javascript
// Technologies: D3.js + React + Framer Motion
import * as d3 from 'd3'
import { motion } from 'framer-motion'
```

### **Multiple Choice Quizzes**
```javascript
// Technologies: React Hook Form + Custom components
import { useForm } from 'react-hook-form'
// Leverage existing Badge, Spoiler components
```

### **Mathematical Input**
```javascript
// Technologies: MathQuill + KaTeX (already in use)
import { addStyles, EditableMathField } from 'react-mathquill'
```

## Architecture Integration

### **Component Registration**
Add to `constants.py`:
```python
INTERACTIVE_COMPONENTS = [
    'CodeRunner', 'InteractivePlot', 'Quiz', 'ConvolutionDemo', 
    'MathInput', 'ParameterSlider'
]
INLINE_COMPONENTS += INTERACTIVE_COMPONENTS
```

### **Bundle Optimization**
- **Dynamic imports** for heavy libraries (Pyodide, D3)
- **Code splitting** by feature type
- **Web Workers** for intensive computations

### **State Management**
- **React Context** for quiz progress
- **Local Storage** for user preferences
- **URL params** for shareable interactive states

## Specific Recommendations

### **For Convolution Book:**
1. **Pyodide** - Signal processing with SciPy
2. **D3.js** - Custom convolution animations
3. **Plotly.js** - Frequency domain plots
4. **React Hook Form** - Interactive exercises

### **Quick Wins:**
1. Start with **React Hook Form** quizzes (lightweight)
2. Add **Monaco Editor** for simple code blocks
3. Integrate **Desmos** for function plotting
4. Build custom sliders with **React Spring**

### **Performance Considerations:**
- Lazy load Pyodide (2.5MB)
- Use Web Workers for heavy computations
- Cache mathematical results
- Progressive enhancement approach

## Implementation Strategy

Looking at the existing architecture:

1. **Add new components** to `INLINE_COMPONENTS` and `BLOCK_COMPONENTS` in constants.py
2. **Create React components** in the shared-assets/components directory
3. **Use Pyodide integration** for computational notebooks
4. **Leverage existing spoiler/accordion system** for progressive disclosure

## Next Steps

Recommended implementation order:
1. A lightweight quiz component with React Hook Form
2. A Pyodide code runner for mathematical demonstrations
3. Interactive convolution visualizations with D3.js
4. Advanced assessment tools with drag-and-drop functionality