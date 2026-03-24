/*!
    * Start Bootstrap - SB UI Kit Pro v2.0.3 (https://shop.startbootstrap.com/product/sb-ui-kit-pro)
    * Copyright 2013-2021 Start Bootstrap
    * Licensed under SEE_LICENSE (https://github.com/BlackrockDigital/sb-ui-kit-pro/blob/master/LICENSE)
    */
    window.addEventListener('DOMContentLoaded', event => {
    // Activate feather
    feather.replace();

    const hasGtag = typeof window.gtag === 'function';
    const trackEvent = function(name, params) {
        if (!hasGtag) {
            return;
        }
        window.gtag('event', name, params || {});
    };

    const pagePath = window.location.pathname === '/index.html' ? '/' : window.location.pathname;
    const pageTitle = document.title;

    const classifyPageView = function() {
        if (pagePath.endsWith('/phishu-framework-pricing.html')) {
            trackEvent('view_pricing', {
                page_title: pageTitle,
                page_path: pagePath
            });
        }

        if (/\/phishu-framework-vs-[^/]+\.html$/.test(pagePath)) {
            trackEvent('view_comparison_page', {
                page_title: pageTitle,
                page_path: pagePath
            });
        }

        if (/(clickfix|aitm|browser-in-browser|qr-phishing|no-allow-listing|passkey-bypass|session-hijacking)/.test(pagePath)) {
            trackEvent('view_technique_page', {
                page_title: pageTitle,
                page_path: pagePath
            });
        }

        if (/(mssps|enterprises|red-teams|pentest)/.test(pagePath)) {
            trackEvent('view_use_case_page', {
                page_title: pageTitle,
                page_path: pagePath
            });
        }
    };

    classifyPageView();

    document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link || !link.href) {
            return;
        }

        const href = link.getAttribute('href') || '';
        const linkText = (link.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 120);
        const url = new URL(link.href, window.location.origin);

        if (url.hostname === 'framework.phishu.net') {
            trackEvent('click_framework', {
                page_title: pageTitle,
                page_path: pagePath,
                destination_url: url.href,
                link_text: linkText
            });
            return;
        }

        if (href.startsWith('mailto:')) {
            trackEvent('click_email', {
                page_title: pageTitle,
                page_path: pagePath,
                destination_url: href,
                link_text: linkText
            });
            return;
        }

        if (url.pathname.endsWith('/phishu-framework-pricing.html')) {
            trackEvent('click_pricing', {
                page_title: pageTitle,
                page_path: pagePath,
                destination_url: url.href,
                link_text: linkText
            });
            return;
        }

        if (url.pathname.endsWith('/contact-us.html')) {
            const ctaText = linkText.toLowerCase();
            const eventName = /(request a quote|get started|talk to phishu|contact sales|submit request)/.test(ctaText)
                ? 'click_quote'
                : 'click_contact_page';
            trackEvent(eventName, {
                page_title: pageTitle,
                page_path: pagePath,
                destination_url: url.href,
                link_text: linkText
            });
        }
    }, true);

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function() {
            trackEvent('submit_contact_form', {
                page_title: pageTitle,
                page_path: pagePath,
                form_id: 'contact-form'
            });
        });
    }

    document.addEventListener('phishu:lead_generated', function() {
        trackEvent('generate_lead', {
            page_title: pageTitle,
            page_path: pagePath,
            method: 'contact_form'
        });
    });

    // Enable tooltips globally
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Enable popovers globally
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    // Activate Bootstrap scrollspy for the sticky nav component
    const navStick = document.body.querySelector('#navStick');
    if (navStick) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#navStick',
            offset: 82,
        });
    }

    // Collapse Navbar
    // Add styling fallback for when a transparent background .navbar-marketing is scrolled
    var navbarCollapse = function() {
        const navbarMarketingTransparentFixed = document.body.querySelector('.navbar-marketing.bg-transparent.fixed-top');
        if (!navbarMarketingTransparentFixed) {
            return;
        }
        if (window.scrollY === 0) {
            navbarMarketingTransparentFixed.classList.remove('navbar-scrolled')
        } else {
            navbarMarketingTransparentFixed.classList.add('navbar-scrolled')
        }

    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    document.addEventListener('scroll', navbarCollapse);

});
