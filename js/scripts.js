/*!
    * Start Bootstrap - SB UI Kit Pro v2.0.3 (https://shop.startbootstrap.com/product/sb-ui-kit-pro)
    * Copyright 2013-2021 Start Bootstrap
    * Licensed under SEE_LICENSE (https://github.com/BlackrockDigital/sb-ui-kit-pro/blob/master/LICENSE)
    */
    window.addEventListener('DOMContentLoaded', event => {
    const currentPath = window.location.pathname;
    const isBlogArticle = currentPath.indexOf('/blogs/') !== -1;
    const basePrefix = isBlogArticle ? '../' : '';
    const localHref = function(path) {
        return basePrefix + path;
    };
    const normalizedPath = currentPath === '/' ? '/index.html' : currentPath;
    const isCurrentPage = function(path) {
        if (path === 'index.html') {
            return currentPath === '/' || currentPath.endsWith('/index.html');
        }
        return normalizedPath.endsWith('/' + path);
    };

    const marketingNav = document.querySelector('nav.navbar-marketing');
    if (marketingNav) {
        const homeClass = isCurrentPage('index.html') ? ' active' : '';
        const blogClass = isCurrentPage('blog.html') ? ' active' : '';
        const pricingClass = isCurrentPage('phishu-framework-pricing.html') ? ' active' : '';
        const contactClass = isCurrentPage('contact-us.html') ? ' active' : '';

        marketingNav.innerHTML = `
            <div class="container px-5">
                <a class="navbar-brand text-white" href="${localHref('index.html')}">PhishU</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i data-feather="menu"></i></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto me-lg-5">
                        <li class="nav-item"><a class="nav-link${homeClass}" href="${localHref('index.html')}">Home</a></li>
                        <li class="nav-item dropdown dropdown-xl no-caret">
                            <a class="nav-link dropdown-toggle" id="navbarDropdownServices" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Services
                                <i class="fas fa-chevron-right dropdown-arrow"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end animated--fade-in-up me-lg-n25 me-xl-n15" aria-labelledby="navbarDropdownServices">
                                <div class="row g-0">
                                    <div class="col-lg-6 p-lg-5">
                                        <div class="d-flex align-items-center justify-content-between gap-3 mb-2">
                                            <h6 class="dropdown-header text-primary mb-0">PhishU Framework SaaS</h6>
                                            <a class="btn btn-outline-primary btn-sm fw-500" href="${localHref('phishu-framework-pricing.html')}">Pricing</a>
                                        </div>
                                        <a class="dropdown-item" href="${localHref('ai-assisted-phishing-campaign-builder.html')}">AI Targeted Recon and Content Generation</a>
                                        <a class="dropdown-item" href="${localHref('phishing-deliverability-and-evasion.html')}">Real-World Filter Evasion</a>
                                        <a class="dropdown-item" href="${localHref('clickfix-phishing-simulation.html')}">ClickFix</a>
                                        <a class="dropdown-item" href="${localHref('oauth-consent-grant-phishing-simulation.html')}">OAuth Consent Grants</a>
                                        <a class="dropdown-item" href="${localHref('device-code-phishing-simulation.html')}">Device Code Phishing</a>
                                        <a class="dropdown-item" href="${localHref('calendar-event-phishing-simulation.html')}">Calendar Event Phishing</a>
                                        <a class="dropdown-item" href="${localHref('qr-phishing-simulation.html')}">QR Codes</a>
                                        <a class="dropdown-item" href="${localHref('malicious-attachment-phishing-simulation.html')}">Malicious Attachments</a>
                                        <a class="dropdown-item" href="${localHref('browser-in-browser-phishing-simulation.html')}">Browser-in-Browser</a>
                                        <a class="dropdown-item" href="${localHref('passkey-bypass-phishing-simulation.html')}">Passkey Bypass</a>
                                    </div>
                                    <div class="col-lg-6 p-lg-5">
                                        <div class="d-flex align-items-center justify-content-between gap-3 mb-2">
                                            <h6 class="dropdown-header text-primary mb-0">Consulting</h6>
                                            <a class="btn btn-teal btn-sm fw-500" href="${localHref('contact-us.html')}">Request a Quote</a>
                                        </div>
                                        <a class="dropdown-item" href="${localHref('one-time-phishing-campaigns.html')}">One-Time Phishing Campaigns</a>
                                        <a class="dropdown-item" href="${localHref('ai-phishing-report-generator.html')}">Reporting</a>
                                        <a class="dropdown-item" href="${localHref('phishing-awareness-training-that-works.html')}">Training</a>
                                        <a class="dropdown-item" href="${localHref('read-only-phishing-framework-access.html')}">Read-Only Framework Access</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="https://framework.phishu.net">PhishU Framework</a></li>
                        <li class="nav-item"><a class="nav-link${blogClass}" href="${localHref('blog.html')}">Blog</a></li>
                        <li class="nav-item"><a class="nav-link${pricingClass}" href="${localHref('phishu-framework-pricing.html')}">Pricing</a></li>
                        <li class="nav-item"><a class="nav-link${contactClass}" href="${localHref('contact-us.html')}">Contact</a></li>
                    </ul>
                    <a class="btn fw-500 ms-lg-4 btn-teal" href="${localHref('contact-us.html')}">Get Started!<i class="ms-2" data-feather="arrow-right"></i></a>
                </div>
            </div>`;
    }

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

        if (/(clickfix|aitm|browser-in-browser|qr-phishing|no-allow-listing|passkey-bypass|session-hijacking|oauth-consent-grant|device-code|calendar-event|malicious-attachment)/.test(pagePath)) {
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
