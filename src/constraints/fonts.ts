import { Poppins } from 'next/font/google';
import { Merriweather } from 'next/font/google';


export const poppinsStyle = Poppins({
    weight: ['400', '500', '600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    variable: '--font-poppins',
    display: 'swap',
    preload: true
})

