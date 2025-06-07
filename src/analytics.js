// Google Analytics Configuration
export const GA_TRACKING_ID = 'G-0GXREQTXG5';

// Initialize Google Analytics
export const initGA = () => {
    // Add script tag to head
    if (!document.querySelector(`script[src*="googletagmanager"]`)) {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
        document.head.appendChild(script);

        // Initialize dataLayer and gtag function
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            window.dataLayer.push(arguments);
        }
        window.gtag = gtag;

        // Initialize gtag
        gtag('js', new Date());
        gtag('config', GA_TRACKING_ID, {
            debug_mode: true,
            send_page_view: true,
            cookie_domain: 'auto',
            transport_type: 'beacon'
        });

        console.log('Google Analytics initialized with ID:', GA_TRACKING_ID);
    }
};

// Track Page Views
export const pageview = (url) => {
    if (window.gtag) {
        window.gtag('config', GA_TRACKING_ID, {
            page_path: url,
        });
        console.log('Pageview tracked:', url);
    } else {
        console.warn('gtag not initialized');
    }
};

// Track Events
export const event = ({ action, category, label, value }) => {
    if (window.gtag) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
        console.log('Event tracked:', { action, category, label, value });
    } else {
        console.warn('gtag not initialized');
    }
}; 