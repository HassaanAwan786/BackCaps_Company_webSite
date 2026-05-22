#!/usr/bin/env python3
import os, glob

DIR = os.path.dirname(os.path.abspath(__file__))

def fix_paths(filepath):
    with open(filepath, 'r') as f:
        code = f.read()

    # 1. Fix motion import
    code = code.replace('from "motion/react"', 'from "framer-motion"')
    code = code.replace("from 'motion/react'", "from 'framer-motion'")

    # 2. Fix image imports
    import_coo = 'import cooImage from "../../imports/COO.png";'
    code = code.replace(import_coo, '')
    code = code.replace('cooImage', '"/assets/images/team/portfolio/hassaan/COO.png"')

    # 3. Fix CV import
    import_cv = 'import cvPdf from "../../imports/Hassaan\'s_CV.pdf";'
    code = code.replace(import_cv, '')
    code = code.replace('cvPdf', '"/assets/images/team/portfolio/hassaan/Hassaan_CV.pdf"')

    # 4. Fix links import
    import_links = 'import { MAILTO, SOCIAL_LINKS } from "../constants/links";'
    code = code.replace(import_links, 'const SOCIAL_LINKS = { linkedin: "https://www.linkedin.com/in/hassaan712/", github: "https://github.com/HassaanAwan786", email: "hassaanawan777@gmail.com" }; const MAILTO = "mailto:hassaanawan777@gmail.com";')

    with open(filepath, 'w') as f:
        f.write(code)

files = glob.glob(os.path.join(DIR, "*.tsx"))
for f in files:
    fix_paths(f)
