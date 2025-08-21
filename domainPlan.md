# Domain Strategy: LessWrong Pattern Implementation Plan

## Overview

Implement a domain-aware single application that serves different user experiences based on the accessing domain, similar to how LessWrong and Alignment Safety Forum share a codebase but present tailored interfaces.

## Target Architecture

### Domain Experiences

**tripos.guru**: Cambridge-focused experience
- Shows only Cambridge content in navigation/sidebar
- Cambridge-themed branding and colors
- Landing page emphasizes course structure (Part IA, IB, II)
- Search applies to Cambridge content only
- URL structure: `tripos.guru/part-ib/analysis-topology/`

**notes.danielc.rocks**: Personal site experience  
- Shows all content including Cambridge as a dedicated section
- Personal branding and color scheme
- Landing page emphasizes breadth of topics
- Search covers all content
- URL structure: `notes.danielc.rocks/tripos/part-ib/analysis-topology/` (possibly with Cambridge content also accessible at root level - is this a good idea or too confusing?)


### 2. Content Organization Strategy
- Cambridge content accessible at both:
  - `tripos.guru/part-ib/analysis/` 
  - `notes.danielc.rocks/part-ib/analysis/` OR `notes.danielc.rocks/tripos/part-ib/analysis/`
- Personal content only on `notes.danielc.rocks/comp-sci/`, `/maths/`, etc.

## Benefits Summary

### Technical Benefits
- ✅ Single codebase (easier maintenance)
- ✅ Shared components and utilities
- ✅ Unified build and deployment process
- ✅ No duplicate article_data.json issues
- ✅ Better SEO through consolidated domain authority

### User Experience Benefits
- ✅ Cambridge students get pure, focused experience at tripos.guru
- ✅ Personal visitors get comprehensive view at notes.danielc.rocks
- ✅ Both domains maintain their distinct identity and branding
- ✅ Natural discovery of related content across domains
- ✅ Consistent search and navigation patterns

### Business Benefits
- ✅ Preserve memorable tripos.guru domain for marketing
- ✅ Maintain personal brand on notes.danielc.rocks
- ✅ Enable audience cross-pollination
- ✅ Reduce infrastructure complexity
- ✅ Easier content updates and feature additions

## Success Metrics
- Cambridge users primarily stay within Cambridge content on tripos.guru
- Personal site visitors discover and engage with Cambridge content
- Reduced maintenance overhead compared to separate sites
- Maintained or improved search rankings for both domains
- Positive user feedback on focused vs. comprehensive experiences