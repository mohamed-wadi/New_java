// Google Analytics Configuration
export const GA_TRACKING_ID = 'G-0GXREQTXG5';

// Initialize Google Analytics
export const initGA = () => {
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script1);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
        window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID, {
        send_page_view: true,
        cookie_domain: 'auto',
        transport_type: 'beacon'
    });

    window.gtag = gtag;
};

// Track Page Views
export const pageview = (url) => {
    if (window.gtag) {
        window.gtag('config', GA_TRACKING_ID, {
            page_path: url,
        });
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
    }
}; 