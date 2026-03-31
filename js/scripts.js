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
                <a class="navbar-brand text-white" href="${localHref('index.html')}">Home</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i data-feather="menu"></i></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto me-lg-5">
                        <li class="nav-item dropdown dropdown-xl no-caret">
                            <a class="nav-link dropdown-toggle" id="navbarDropdownServices" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Services
                                <i class="fas fa-chevron-right dropdown-arrow"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end animated--fade-in-up me-lg-n25 me-xl-n15" style="max-height: min(78vh, 900px); overflow-y: auto; overflow-x: hidden;" aria-labelledby="navbarDropdownServices">
                                <div class="row g-0">
                                    <div class="col-lg-12 p-lg-5">
                                        <div class="d-flex align-items-center justify-content-between gap-3 mb-3">
                                            <div class="dropdown-header text-primary mb-0" style="font-size: 1.12rem; letter-spacing: 0.11em;">PhishU Framework SaaS</div>
                                            <a class="btn btn-outline-primary btn-sm fw-500" href="${localHref('phishu-framework-pricing.html')}">Pricing</a>
                                        </div>
                                        <h6 class="dropdown-header text-primary ps-3" style="font-size: 0.82rem; letter-spacing: 0.14em;">Features</h6>
                                        <a class="dropdown-item ps-4" style="white-space: normal; font-size: 0.88rem; line-height: 1.3; padding-top: 0.42rem; padding-bottom: 0.42rem;" href="${localHref('ai-assisted-phishing-campaign-builder.html')}">AI Targeted Recon and Content Generation</a>
                                        <a class="dropdown-item ps-4" style="white-space: normal; font-size: 0.88rem; line-height: 1.3; padding-top: 0.42rem; padding-bottom: 0.42rem;" href="${localHref('phishing-deliverability-and-evasion.html')}">Real-World Filter Evasion</a>
                                        <a class="dropdown-item ps-4" style="white-space: normal; font-size: 0.88rem; line-height: 1.3; padding-top: 0.42rem; padding-bottom: 0.42rem;" href="${localHref('doppelganger-domain-acquisition.html')}">Doppelganger Domain Acquisition</a>
                                        <a class="dropdown-item ps-4" style="white-space: normal; font-size: 0.88rem; line-height: 1.3; padding-top: 0.42rem; padding-bottom: 0.42rem;" href="${localHref('auto-cert-dkim-dmarc-spf-provisioning.html')}">Auto Cert / DKIM / DMARC / SPF Provisioning</a>
                                        <a class="dropdown-item ps-4" style="white-space: normal; font-size: 0.88rem; line-height: 1.3; padding-top: 0.42rem; padding-bottom: 0.42rem;" href="${localHref('phishing-simulation-software.html')}">Create Custom Campaigns</a>
                                        <a class="dropdown-item ps-4" style="white-space: normal; font-size: 0.88rem; line-height: 1.3; padding-top: 0.42rem; padding-bottom: 0.42rem;" href="${localHref('create-custom-landing-pages.html')}">Create Custom Landing Pages</a>
                                        <a class="dropdown-item ps-4" style="white-space: normal; font-size: 0.88rem; line-height: 1.3; padding-top: 0.42rem; padding-bottom: 0.42rem;" href="${localHref('email-and-landing-page-templates.html')}">Email and Landing Page Templates</a>
                                        <a class="dropdown-item ps-4" style="white-space: normal; font-size: 0.88rem; line-height: 1.3; padding-top: 0.42rem; padding-bottom: 0.42rem;" href="${localHref('ai-phishing-report-generator.html')}">AI-Generated Reporting</a>
                                        <a class="dropdown-item ps-4" style="white-space: normal; font-size: 0.88rem; line-height: 1.3; padding-top: 0.42rem; padding-bottom: 0.42rem;" href="${localHref('phishing-awareness-training-that-works.html')}">AI-Generated Conditional Training</a>
                                        <a class="dropdown-item ps-4" style="white-space: normal; font-size: 0.88rem; line-height: 1.3; padding-top: 0.42rem; padding-bottom: 0.42rem;" href="${localHref('phishing-tracking-and-analytics.html')}">Tracking and Analytics</a>
                                        <a class="dropdown-item ps-4" style="white-space: normal; font-size: 0.88rem; line-height: 1.3; padding-top: 0.42rem; padding-bottom: 0.42rem;" href="${localHref('cloud-directory-sync-for-phishing-campaigns.html')}">Cloud Directory Sync</a>
                                        <a class="dropdown-item ps-4" style="white-space: normal; font-size: 0.88rem; line-height: 1.3; padding-top: 0.42rem; padding-bottom: 0.42rem;" href="${localHref('real-time-phishing-notifications.html')}">Real-Time Visit and Credential Capture Notifications</a>
                                        <div class="dropdown-divider border-0"></div>
                                        <h6 class="dropdown-header text-primary ps-3" style="font-size: 0.82rem; letter-spacing: 0.14em;">Techniques</h6>
                                        <a class="dropdown-item ps-4" style="white-space: normal; font-size: 0.88rem; line-height: 1.3; padding-top: 0.42rem; padding-bottom: 0.42rem;" href="${localHref('aitm-phishing-assessment.html')}">AiTM/MiTM Proxy and Session Hijacking</a>
                                        <a class="dropdown-item ps-4" style="white-space: normal; font-size: 0.88rem; line-height: 1.3; padding-top: 0.42rem; padding-bottom: 0.42rem;" href="${localHref('clickfix-phishing-simulation.html')}">ClickFix</a>
                                        <a class="dropdown-item ps-4" style="white-space: normal; font-size: 0.88rem; line-height: 1.3; padding-top: 0.42rem; padding-bottom: 0.42rem;" href="${localHref('oauth-consent-grant-phishing-simulation.html')}">OAuth Consent Grants</a>
                                        <a class="dropdown-item ps-4" style="white-space: normal; font-size: 0.88rem; line-height: 1.3; padding-top: 0.42rem; padding-bottom: 0.42rem;" href="${localHref('device-code-phishing-simulation.html')}">Device Code Phishing</a>
                                        <a class="dropdown-item ps-4" style="white-space: normal; font-size: 0.88rem; line-height: 1.3; padding-top: 0.42rem; padding-bottom: 0.42rem;" href="${localHref('calendar-event-phishing-simulation.html')}">Calendar Event Phishing</a>
                                        <a class="dropdown-item ps-4" style="white-space: normal; font-size: 0.88rem; line-height: 1.3; padding-top: 0.42rem; padding-bottom: 0.42rem;" href="${localHref('qr-phishing-simulation.html')}">QR Codes</a>
                                        <a class="dropdown-item ps-4" style="white-space: normal; font-size: 0.88rem; line-height: 1.3; padding-top: 0.42rem; padding-bottom: 0.42rem;" href="${localHref('malicious-attachment-phishing-simulation.html')}">Malicious Attachments</a>
                                        <a class="dropdown-item ps-4" style="white-space: normal; font-size: 0.88rem; line-height: 1.3; padding-top: 0.42rem; padding-bottom: 0.42rem;" href="${localHref('browser-in-browser-phishing-simulation.html')}">Browser-in-Browser</a>
                                        <a class="dropdown-item ps-4" style="white-space: normal; font-size: 0.88rem; line-height: 1.3; padding-top: 0.42rem; padding-bottom: 0.42rem;" href="${localHref('passkey-bypass-phishing-simulation.html')}">Passkey Bypass</a>
                                        <a class="dropdown-item ps-4" style="white-space: normal; font-size: 0.88rem; line-height: 1.3; padding-top: 0.42rem; padding-bottom: 0.42rem;" href="${localHref('cloudflare-turnstile-phishing-simulation.html')}">Cloudflare Turnstile</a>
                                        <div class="dropdown-divider my-3"></div>
                                        <h6 class="dropdown-header text-primary mb-2" style="font-size: 0.82rem; letter-spacing: 0.14em;">Consulting</h6>
                                        <a class="dropdown-item ps-4" style="white-space: normal; font-size: 0.88rem; line-height: 1.3; padding-top: 0.42rem; padding-bottom: 0.42rem;" href="${localHref('one-time-phishing-campaigns.html')}">One-Time Phishing Campaigns</a>
                                        <a class="dropdown-item ps-4" style="white-space: normal; font-size: 0.88rem; line-height: 1.3; padding-top: 0.42rem; padding-bottom: 0.42rem;" href="${localHref('ai-phishing-report-generator.html')}">Reporting</a>
                                        <a class="dropdown-item ps-4" style="white-space: normal; font-size: 0.88rem; line-height: 1.3; padding-top: 0.42rem; padding-bottom: 0.42rem;" href="${localHref('phishing-awareness-training-that-works.html')}">Training</a>
                                        <a class="dropdown-item ps-4" style="white-space: normal; font-size: 0.88rem; line-height: 1.3; padding-top: 0.42rem; padding-bottom: 0.42rem;" href="${localHref('read-only-phishing-framework-access.html')}">Read-Only Framework Access</a>
                                        <div class="mt-3 ps-3">
                                            <a class="btn btn-teal btn-sm fw-500" href="${localHref('contact-us.html')}">Request a Quote</a>
                                        </div>
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

    const fetchBlogPosts = async function() {
        try {
            const response = await fetch(localHref('blog.html'), { credentials: 'same-origin' });
            if (!response.ok) {
                return [];
            }
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            return Array.from(doc.querySelectorAll('a.card.card-link')).map(card => {
                const href = card.getAttribute('href') || '';
                const absoluteHref = new URL(href, response.url).pathname;
                return {
                    href: absoluteHref,
                    absoluteHref,
                    date: (card.querySelector('.text-uppercase-expanded')?.textContent || '').trim(),
                    title: (card.querySelector('h2')?.textContent || '').trim(),
                    description: (card.querySelector('p')?.textContent || '').trim()
                };
            }).filter(post => post.href && post.title);
        } catch (err) {
            return [];
        }
    };

    const ensureBlogCarouselAssets = async function() {
        if (!document.getElementById('phishu-blog-carousel-styles')) {
            const style = document.createElement('style');
            style.id = 'phishu-blog-carousel-styles';
            style.textContent = `
                .blog-swiper,
                .blog-related-swiper {
                  overflow: visible;
                  padding: 0.5rem 0 0.5rem;
                }
                .blog-swiper .swiper-slide,
                .blog-related-swiper .swiper-slide {
                  height: auto;
                }
                .blog-mini-card {
                  display: block;
                  height: 100%;
                  text-decoration: none;
                  color: inherit;
                  background: rgba(255,255,255,0.92);
                  border: 1px solid rgba(15, 23, 42, 0.06);
                  border-radius: 1rem;
                  box-shadow: 0 0.75rem 1.75rem rgba(15, 23, 42, 0.06);
                  transition: transform 0.18s ease, box-shadow 0.18s ease;
                }
                .blog-mini-card:hover,
                .blog-mini-card:focus,
                .blog-mini-card:active {
                  color: inherit;
                  text-decoration: none;
                }
                .blog-mini-card:hover,
                .blog-mini-card:focus-visible {
                  transform: translateY(-2px);
                  box-shadow: 0 1rem 2rem rgba(15, 23, 42, 0.08);
                }
                .blog-mini-card-body {
                  padding: 1rem 1rem 0.95rem;
                  display: flex;
                  flex-direction: column;
                  height: 100%;
                }
                .blog-mini-date {
                  font-size: 0.72rem;
                  letter-spacing: 0.08em;
                  text-transform: uppercase;
                  color: #6c757d;
                  margin-bottom: 0.85rem;
                }
                .blog-mini-title {
                  font-size: 0.92rem;
                  line-height: 1.4;
                  margin-bottom: 0.55rem;
                }
                .blog-mini-desc {
                  font-size: 0.82rem;
                  line-height: 1.55;
                  color: #5b6470;
                  margin-bottom: 0.7rem;
                }
                .blog-mini-link {
                  font-size: 0.8rem;
                  font-weight: 700;
                  color: #20c997;
                  margin-top: auto;
                }
                .blog-swiper-nav {
                  display: flex;
                  justify-content: flex-end;
                  gap: 0.65rem;
                }
                .blog-related-wrap {
                  position: relative;
                  overflow: visible;
                  padding: 0 3.25rem 0.75rem;
                }
                .blog-related-swiper {
                  overflow: hidden;
                }
                .blog-swiper-button,
                .blog-related-swiper .swiper-button-prev,
                .blog-related-swiper .swiper-button-next {
                  width: 2.75rem;
                  height: 2.75rem;
                  border-radius: 999px;
                  border: 1px solid rgba(15, 23, 42, 0.1);
                  background: rgba(255,255,255,0.92);
                  color: #1f2d3d;
                  display: inline-flex;
                  align-items: center;
                  justify-content: center;
                  box-shadow: 0 0.5rem 1.25rem rgba(15, 23, 42, 0.08);
                }
                .blog-swiper-button::after,
                .blog-related-swiper .swiper-button-prev::after,
                .blog-related-swiper .swiper-button-next::after {
                  font-size: 0.95rem;
                  font-weight: 700;
                }
                .blog-related-swiper .swiper-button-prev,
                .blog-related-swiper .swiper-button-next {
                  position: absolute;
                  top: 50%;
                  transform: translateY(-50%);
                  margin-top: 0;
                  z-index: 3;
                }
                .blog-related-swiper .swiper-button-prev {
                  left: -3.25rem;
                }
                .blog-related-swiper .swiper-button-next {
                  right: -3.25rem;
                }
            `;
            document.head.appendChild(style);
        }

        if (!document.querySelector('link[data-phishu-swiper-css]') && !document.querySelector('link[href*="swiper-bundle.min.css"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css';
            link.setAttribute('data-phishu-swiper-css', 'true');
            document.head.appendChild(link);
        }

        if (window.Swiper) {
            return;
        }

        await new Promise((resolve, reject) => {
            const existing = document.querySelector('script[data-phishu-swiper-js]');
            if (existing) {
                existing.addEventListener('load', resolve, { once: true });
                existing.addEventListener('error', reject, { once: true });
                return;
            }
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js';
            script.async = true;
            script.setAttribute('data-phishu-swiper-js', 'true');
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
        });
    };

    const renderBlogSlides = function(slideHost, posts) {
        if (!slideHost || !posts.length) {
            return;
        }

        slideHost.innerHTML = posts.slice(0, 6).map(post => `
            <div class="swiper-slide">
              <a class="blog-mini-card" href="${post.href}" target="_blank" rel="noopener noreferrer">
                <div class="blog-mini-card-body">
                  <div class="blog-mini-date">${post.date}</div>
                  <h3 class="blog-mini-title">${post.title}</h3>
                  <p class="blog-mini-desc">${post.description}</p>
                  <div class="blog-mini-link">Read article <i class="fas fa-arrow-right text-xs ms-1"></i></div>
                </div>
              </a>
            </div>
          `).join('');
    };

    const initHomepageBlogCarousel = function(posts) {
        const blogSlides = document.getElementById('blogCarouselSlides');
        if (!blogSlides || !posts.length) {
            return;
        }
        const slideHost = blogSlides.classList.contains('swiper-wrapper') ? blogSlides : (blogSlides.querySelector('.swiper-wrapper') || blogSlides);
        renderBlogSlides(slideHost, posts);

        const blogSwiper = document.querySelector('.blog-swiper');
        if (blogSwiper && !blogSwiper.dataset.initialized) {
            blogSwiper.dataset.initialized = 'true';
            const visiblePosts = posts.slice(0, 6);
            new Swiper('.blog-swiper', {
                slidesPerView: 1.35,
                spaceBetween: 16,
                navigation: {
                    nextEl: '.blog-swiper .swiper-button-next, .blog-swiper-nav .swiper-button-next',
                    prevEl: '.blog-swiper .swiper-button-prev, .blog-swiper-nav .swiper-button-prev',
                },
                breakpoints: {
                    576: { slidesPerView: 1.9, spaceBetween: 16 },
                    768: { slidesPerView: 2.6, spaceBetween: 18 },
                    1200: { slidesPerView: 3.4, spaceBetween: 18 }
                }
            });
        }
    };

    const injectBlogArticleRecommendations = function(posts) {
        if (!isBlogArticle || !posts.length || document.getElementById('blogArticleMorePosts')) {
            return;
        }
        const currentAbsolutePath = normalizedPath;
        const currentTitle = (document.querySelector('h1.page-header-ui-title')?.textContent || document.title || '').replace(/\s+/g, ' ').trim().toLowerCase();
        const recommendations = posts.filter(post => {
            const postTitle = (post.title || '').replace(/\s+/g, ' ').trim().toLowerCase();
            return currentAbsolutePath !== post.absoluteHref && currentTitle !== postTitle;
        }).slice(0, 3);
        if (!recommendations.length) {
            return;
        }

        const footerHost = document.getElementById('layoutDefault_footer');
        if (!footerHost) {
            return;
        }

        const section = document.createElement('section');
        section.id = 'blogArticleMorePosts';
        section.className = 'bg-light pt-8 pb-6 blog-strip-section';
        section.innerHTML = `
            <div class="container px-5">
                <div class="text-center mb-4">
                    <div class="blog-strip-header mx-auto text-center">
                        <h3 class="mb-3">More from the Blog</h3>
                        <p class="text-muted mb-0">Recent PhishU articles worth reading next.</p>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
                    <div></div>
                    <div class="d-flex align-items-center gap-3">
                        <a class="btn btn-outline-primary btn-sm fw-500" href="${localHref('blog.html')}">View All Articles</a>
                        <div class="blog-swiper-nav">
                            <div class="swiper-button-prev blog-swiper-button"></div>
                            <div class="swiper-button-next blog-swiper-button"></div>
                        </div>
                    </div>
                </div>
                <div class="swiper blog-swiper" data-aos="fade-up">
                    <div class="swiper-wrapper" id="blogCarouselSlides"></div>
                </div>
            </div>`;
        footerHost.parentNode.insertBefore(section, footerHost);

        const articleSlides = section.querySelector('#blogCarouselSlides');
        renderBlogSlides(articleSlides, recommendations);

        const articleSwiper = section.querySelector('.blog-swiper');
        if (articleSwiper && !articleSwiper.dataset.initialized) {
            articleSwiper.dataset.initialized = 'true';
            new Swiper(articleSwiper, {
                slidesPerView: 1.35,
                spaceBetween: 16,
                navigation: {
                    nextEl: section.querySelector('.swiper-button-next'),
                    prevEl: section.querySelector('.swiper-button-prev')
                },
                breakpoints: {
                    576: { slidesPerView: 1.9, spaceBetween: 16 },
                    768: { slidesPerView: 2.6, spaceBetween: 18 },
                    1200: { slidesPerView: 3.4, spaceBetween: 18 }
                }
            });
        }
    };

    fetchBlogPosts().then(async function(posts) {
        if ((document.getElementById('blogCarouselSlides') || isBlogArticle) && posts.length) {
            try {
                await ensureBlogCarouselAssets();
            } catch (err) {
                // If Swiper fails to load, the homepage/article content still renders as links.
            }
        }
        injectBlogArticleRecommendations(posts);
        if (!isBlogArticle) {
            initHomepageBlogCarousel(posts);
        }
    });

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
