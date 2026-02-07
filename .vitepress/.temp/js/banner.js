window.BitterBrainsBanner = window.BitterBrainsBanner || {
  host: "",
  affiliateKey: "vuerouter",
  emulateDate: undefined,
  emulateHour: undefined,
  date: "07/03/2024, 07:49 AM Central European Summer Time",
  activePhase: {"id":"VS-FREE_WEEKEND_SALE_SPRING24_EXT1","countdownEnds":"2024-07-03T09:59:59.000000Z","cta":"Get Certified","ends":"2024-07-03T09:59:59.000000Z","title":"Get your Official Vue.js Certification for only $99","link":"https://certificates.dev/vuejs#pricing","assets":null,"static":"CERT_FREEWEEKEND_SALE_EXT","classes":["bb-campaign-cert-free-weekend-live-affiliates"],"prelude":"<span>LIMITED</span> OFFER","addendum":null,"subtitle":null,"couponCode":null,"isExtended":false,"hideBanners":false,"assetsFormat":"png","showCountdown":true,"countdownFooter":"extended for","showDaysAsHours":true,"affiliates":["vueschool_free","vueschool","vueschool_premium","masteringnuxt","vueuse","vuerouter","pinia","vs_masteringpinia","vs_vuebundle","vuejsdevelopers","vuejs"],"starts":"2024-07-02T21:59:59.000Z","isRunning":true,"remaining":15023891,"closedKey":"VS-FREE_WEEKEND_SALE_SPRING24_EXT1_CLOSED","countdownRemaining":15023891,"ctaOffer":"40% OFFER","dripTags":{"YEARLY,LIFETIME,TEAM_2,TEAM_3,TEAM_4,TEAM_5,TEAM_6,TEAM_7,TEAM_8,TEAM_9,TEAM_10,TEAM_12,TEAM_15,TEAM_20,TEAM_25":["Purchased - Bonus","Purchased - Bonus - VJA 2024 Conference Offer"]},"internal":false,"offerLink":"/sales/spring24","logoMobile":"https://staging.vueschool.io/images/banners/assets/MC-2024/mark.svg","logoTablet":"https://vueschool.io/images/banners/assets/WINTER24/mark.svg","logoDesktop":"https://vueschool.io/images/banners/assets/WINTER24/logo.svg","openInNewTab":true,"overrides":{"vuejs":{"hideSeconds":true}},"affiliatesWithCountdown":null,"interlude":null},
  fromCache: false,
  cacheTtl: undefined,
  type: "top",
  closeable: undefined,

  isOpen: false,
  countdownInterval: null,
  isInitiated: false,
  style: null,
  allowList: {
    'masteringnuxt': path => path === '/' || path === '/nuxt2' || path === '/nuxt3',
    'vueschool': path => path === '/' || path.startsWith('/courses') || path.startsWith('/articles') || path.startsWith('/lessons') || path.startsWith('/vueschool-demo')
  },

  render () {
    const { countdownFooter, prelude, interlude, addendum, title, subtitle, cta, link, classes, showCountdown } = this.activePhase
    const countdownFooterElement = countdownFooter ? `<div class="bb-countdown-footer">${countdownFooter}</div>` : ''
    const countdown = showCountdown ? `<div class="bb-countdown-wrapper"><div class="bb-countdown">${this.renderCountdown()}</div>${countdownFooterElement}</div>` : ''
    const preludeElement = prelude ? `<div class="bb-prelude">${prelude}</div>` : ''
    const interludeElement = interlude ? `<div class="bb-interlude">${interlude}</div>` : ''
    const subtitleElement = subtitle ? `<div class="bb-subtitle">${subtitle}</div>` : ''
    const addendumElement = addendum ? `<div class="bb-addendum">${addendum}</div>` : ''
    const buttonElement = cta ? `<div class="bb-button-wrapper"><div class="bb-button">${cta}</div></div>` : ''

    const template = `
      <div class="bb-background"></div>
      <div class="bb-logo"></div>
      <div class="bb-side-image"></div>
      <div class="bb-core">
        <div class="bb-slogan">
          ${preludeElement}
          <div class="bb-title-container">
            <div class="bb-title">${title}</div>
            ${subtitleElement}
          </div>
          ${interludeElement}
        </div>
        ${buttonElement}
        <div class="bb-countdown-container">
        ${addendumElement}
        ${countdown}
        </div>
      </div>
      <div id="bb-close" class="bb-close">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.6894 0.321198C13.2753 -0.0929086 12.6064 -0.0929086 12.1923 0.321198L7 5.50284L1.80774 0.31058C1.39363 -0.103527 0.724687 -0.103527 0.31058 0.31058C-0.103527 0.724687 -0.103527 1.39363 0.31058 1.80774L5.50284 7L0.31058 12.1923C-0.103527 12.6064 -0.103527 13.2753 0.31058 13.6894C0.724687 14.1035 1.39363 14.1035 1.80774 13.6894L7 8.49716L12.1923 13.6894C12.6064 14.1035 13.2753 14.1035 13.6894 13.6894C14.1035 13.2753 14.1035 12.6064 13.6894 12.1923L8.49716 7L13.6894 1.80774C14.0929 1.40425 14.0929 0.724687 13.6894 0.321198Z" fill="white"/>
        </svg>
      </div>
    `

    const el = document.createElement('a')
    el.setAttribute('id', 'bb-banner')

    const query = {
      utm_source: this.affiliateKey,
      utm_medium: 'website',
      utm_campaign: 'affiliate',
      utm_content: `${this.type}_banner`,
      banner_type: this.type
    }

    const internal = this.activePhase.hasOwnProperty('internal') && !!this.activePhase?.internal
    const openInNewTab = !internal

    if (openInNewTab) {
      el.setAttribute('target', '_blank')
    }

    if (this.affiliateKey !== 'vueschool') {
      query.friend = this.affiliateKey?.toUpperCase()
    }

    const queryString = new URLSearchParams(internal ? {} : query).toString()
    el.setAttribute('href', `${link}?${queryString}`)
    el.classList.add(...classes)
    el.innerHTML = template
    this.addBodyClasses()

    const container = document.getElementById('bb-banner-container') || document.body
    container.appendChild(el)

    addEventListener('popstate', (event) => {
      this.handleNavigation()
    })

    window.history.pushState = new Proxy(window.history.pushState, {
      apply: (target, thisArg, argumentsList) => {
        const output = target.apply(thisArg, argumentsList)
        this.handleNavigation()
        return output
      }
    })
  },
  handleNavigation () {
    this.addBodyClasses()
  },
  addBodyClasses () {
    if (!this.isOpen) return
    const root = document.getElementsByTagName('html')[0]
    root.classList.add('has-bb-banner')

    root.classList.add(`bb-type-${this.type}`)

    if (this.affiliateKey) root.classList.add(`bb-${this.affiliateKey}`)

    const path = window.location.pathname || '/'
    const onTestMode = !!window.BitterBrainsBanner.emulateDate
    if (!this.allowList[this.affiliateKey] || this.allowList[this.affiliateKey](path) || onTestMode) {
      root.classList.remove('bb-banner-hidden')
    } else {
      root.classList.add('bb-banner-hidden')
    }
  },
  renderCountdown () {
    const { showDaysAsHours, hideSeconds } = this.activePhase

    const parts = ['hours', 'minutes']
    if (!showDaysAsHours) parts.unshift('days')
    if (!hideSeconds) parts.push('seconds')
    return parts.map(part => this.renderCountdownPart(part)).join('')
  },
  renderCountdownPart (part) {
    return `
      <div class="bb-countdown-item">
        <div class="bb-countdown-part">
          <div data-countdown="${part}" class="bb-countdown-number"></div><div class="bb-countdown-text"><span class="bb-countdown-text-initial">${part[0]}</span><span class="bb-countdown-text-rest">${part.substring(1)}</span></div>
        </div>
        <div class="bb-countdown-colon">:</div>
      </div>
    `
  },
  getType () {
    const container = document.getElementById('bb-banner-container')
    if (container) return 'inline'

    if (this.type && ['top', 'bottom'].includes(this.type)) return this.type

    return 'top'
  },
  insertStyleTag () {
    const style = document.createElement('style')
    style.textContent = window.BitterBrainsBanner.style
    document.head.appendChild(style)
  },
  close () {
    document.getElementById('bb-banner').remove()
    const root = document.getElementsByTagName('html')[0]
    root.classList.remove('has-bb-banner')
    root.classList.remove('bb-banner-container')
    clearInterval(this.countdownInterval)
    this.isOpen = false
  },
  bindCloseButton () {
    document.getElementById('bb-close').addEventListener('click', (e) => {
      e.preventDefault()
      e.stopPropagation()
      this.close()
      localStorage.setItem(this.activePhase.closedKey, 1)
      localStorage.setItem(`${this.activePhase.id}_BANNER`, 1)
    })
  },
  startCountdown () {
    if (this.activePhase.countdownRemaining < 0) return
    this.updateCountdown()

    if (this.activePhase.isCountdownStatic) return

    this.countdownInterval = setInterval(() => {
      this.activePhase.countdownRemaining -= 1000
      if (this.activePhase.countdownRemaining > 0) {
        this.updateCountdown()
      } else {
        this.close()
      }
    }, 1000)
  },
  updateCountdown () {
    if (!this.isOpen) return

    const { countdownRemaining, showDaysAsHours } = this.activePhase

    const parts = {
      days: Math.floor(countdownRemaining / (1000 * 60 * 60 * 24)),
      hours: Math.floor(countdownRemaining % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
      minutes: Math.floor(countdownRemaining % (1000 * 60 * 60) / (1000 * 60)),
      seconds: Math.floor(countdownRemaining % (1000 * 60) / 1000)
    }

    if (showDaysAsHours) {
      parts.hours = parts.hours + (parts.days * 24)
      delete parts.days
    }

    Object.entries(parts).forEach(([key, value]) => {
      const el = document.querySelector(`[data-countdown=${key}]`)
      if (!el) return
      el.textContent = value.toString().padStart(2, '0')
    })
  },
  init () {
    if (!this.activePhase || localStorage.getItem(this.activePhase.closedKey) || this.isInitiated) return

    this.isOpen = true
    this.isInitiated = true
    const stateCheck = setInterval(() => {
      if (document.readyState === 'complete') {
        clearInterval(stateCheck)

        this.type = this.getType()

        this.insertStyleTag()
        this.render()
        this.bindCloseButton()
        if (this.activePhase.showCountdown) this.startCountdown()
      }
    }, 100)
  }
}

window.BitterBrainsBanner.style = `
:root { --bb-logo-desktop: url(https://vueschool.io/images/banners/assets/WINTER24/logo.svg);--bb-logo-tablet: url(https://vueschool.io/images/banners/assets/WINTER24/mark.svg);--bb-logo-mobile: url(https://staging.vueschool.io/images/banners/assets/MC-2024/mark.svg);   }#bb-banner {
  height: 72px;
  text-decoration: none;
  color: white;
  padding-right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  overflow: hidden;
  line-height: 1.25;
  background: var(--bb-gradient);
}

#bb-banner .bb-logo {
  width: 30px;
  height: 19px;
  left: 16px;
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: var(--bb-logo-mobile);
}

#bb-banner .bb-close {
  font-family: sans-serif;
  color: white;
  position: absolute;
  top: 29px;
  right: 8px;
  line-height: 0;
  font-size: 24px;
  height: 14px;
  width: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#bb-banner .bb-background {
  background-image: var(--bb-bg-mobile);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

#bb-banner .bb-core {
  display: flex;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 10;
  flex-direction: column;
}

#bb-banner .bb-core .bb-slogan {
  display: flex;
  flex-direction: row;
  align-items: center;
  order: 1;
}

#bb-banner .bb-core .bb-title-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2px;
}

#bb-banner .bb-core .bb-extended {
  display: none;
}

#bb-banner .bb-core .bb-title {
  font-size: 14px;
  font-weight: bold;
  color: #00dc82;
}

#bb-banner .bb-core .bb-subtitle {
  color: #FFF;
  font-size: 12px;
}

#bb-banner .bb-core .bb-button-wrapper {
  order: 2;
}

#bb-banner .bb-core .bb-button-wrapper .bb-button {
  border-radius: 6px;
  font-weight: bold;
  color: #000;
  background: white;
  font-size: 14px;
  padding: 14px 8px;
  white-space: nowrap;
}

#bb-banner .bb-core .bb-countdown-wrapper {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  gap: 6px;
  order: 3;
}

#bb-banner .bb-core .bb-countdown-wrapper .bb-countdown-footer {
  order: 1;
}

#bb-banner .bb-core .bb-countdown {
  align-items: center;
  line-height: 1;
  display: flex;
  font-weight: bold;
  font-size: 12px;
  color: #00dc82;
  order: 2;
}

#bb-banner .bb-core .bb-countdown .bb-countdown-item {
  display: flex;
  align-items: center;
}

#bb-banner .bb-core .bb-countdown .bb-countdown-item .bb-countdown-part > div {
  display: inline;
}

#bb-banner .bb-core .bb-countdown .bb-countdown-item:last-child .bb-countdown-colon {
  display: none;
}

#bb-banner .bb-core .bb-countdown .bb-countdown-item .bb-countdown-part .bb-countdown-text .bb-countdown-text-initial~span {
  display: none;
}

@media screen and (max-width: 768px) {
  #bb-banner {
    padding-right: 0px !important;
  }
}

@media (min-width: 768px) {

  #bb-banner .bb-close {
    right: 12px;
  }

  #bb-banner .bb-core {
    gap: 12px;
    flex-direction: row;
  }

  #bb-banner .bb-background {
    background-image: var(--bb-bg-tablet);
  }

  #bb-banner .bb-logo {
    background-image: var(--bb-logo-tablet);
  }

  #bb-banner .bb-core .bb-title {
    font-size: 18px;
  }

  #bb-banner .bb-core .bb-subtitle {
    font-size: 16px;
  }

  #bb-banner .bb-core .bb-button-wrapper {
    display: block;
  }

  #bb-banner .bb-core .bb-button-wrapper .bb-button {
    font-size: 18px;
  }

  #bb-banner .bb-core .bb-countdown-wrapper {
    flex-direction: column-reverse;
  }
}

@media (min-width: 1280px) {
  #bb-banner .bb-core .bb-title-container {
    gap: 4px;
  }
  
  #bb-banner .bb-logo {
    width: 152px;
    left: 24px;
    background-image: var(--bb-logo-desktop);
  }

  #bb-banner .bb-core .bb-slogan {
    gap: 4px;
  }

  #bb-banner .bb-background {
    background-image: var(--bb-bg-desktop);
  }

  #bb-banner .bb-core {
    gap: 32px;
  }

  #bb-banner .bb-core .bb-countdown-wrapper {
    flex-direction: column-reverse;
  }
}

html.has-bb-banner.bb-banner-hidden #bb-banner {
  display: none;
}

/*
BANNER TYPES
*********************************************************/

/* Banner rendered in container element */

html.has-bb-banner #bb-banner-container #bb-banner {
  position: relative;
}

html.has-bb-banner #bb-banner-container #bb-banner .bb-close {
/*  display: none;*/
}

/* Banner Fixed Top */

html.has-bb-banner.bb-type-top {
  margin-top: 72px;
}

html.has-bb-banner.bb-type-top.bb-banner-hidden {
  margin-top: 0;
}

html.has-bb-banner.bb-type-top #bb-banner {
  position: fixed;
  top: 0;
  z-index: 60;
  left: 0;
  right: 0;
}

/* Banner Fixed Bottom */

html.has-bb-banner.bb-type-bottom #bb-banner {
  position: fixed;
  bottom: 10px;
  z-index: 60;
  left: 10px;
  right: 10px;
}
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;500;600;700;800;900&display=swap');

#bb-banner.bb-campaign-cert-free-weekend-live-affiliates {
    background: #1E1E20;
    font-family: 'Inter', sans-serif;
}

#bb-banner.bb-campaign-cert-free-weekend-live-affiliates:hover .bb-core .bb-button-wrapper .bb-button {
    background: #FF1A7A; 
    transition: background-color 0.5s, color 0.5s; 
  }



#bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-logo {
    width: 240px;
height: 37px; 
background-image: url('https://vueschool.io/images/banners/assets/CERTIFICATES/logo.svg');
    position: relative;
    margin-right: 60px;
}

#bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-countdown-container {
    order: 3;
    width: 280px;
}

#bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-countdown-container .bb-countdown-wrapper {
    order: 3;
    display: flex !important;
    flex-direction: row-reverse;
    gap: 10px;
    align-items: center;
}

#bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-slogan .bb-title-container {
    display: flex;
    flex-direction: column;
    gap: 0px;
}

#bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-slogan .bb-prelude, #bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-slogan .bb-interlude {
font-size: 20px;
font-style: normal;
font-weight: 900;
line-height: normal;
color: var(--White, var(--White, #FFF));
font-size: 20px;
font-style: normal;
font-weight: 900;
line-height: normal;
text-transform: uppercase;  
}

#bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-slogan .bb-prelude {
    order: 1;
    white-space: nowrap;
}

#bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-slogan .bb-interlude {
    order: 2;
    white-space: nowrap;
}

#bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-slogan .bb-title-container {
    order: 3;
}


#bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-slogan .bb-prelude span, #bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-slogan .bb-interlude span {
    background: var(--Linear, linear-gradient(90deg, #FF1A7A 1.04%, #FFB800 100%)); 
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}


#bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-slogan .bb-title-container .bb-title {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
   color: white;
}

#bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-slogan .bb-title-container .bb-subtitle {
    color: var(--White, var(--White, #FFF));
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal; 


}

#bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-slogan {
    gap: 40px;
}


#bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-button-wrapper .bb-button {
    border-radius: 50px;
    border: 2px solid #FF1A7A;
    background: var(--ff-1-a-7-a, rgba(255, 26, 122, 0.20)); 
    display: flex;
height: 44px;
padding: 0px 24px;
justify-content: center;
align-items: center;
gap: 10px;
color: var(--White, var(--White, #FFF));
text-align: center;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;  
}

#bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-countdown-container  {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center
}

#bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-countdown-container .bb-countdown-wrapper {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center
}

#bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-countdown-container .bb-countdown-wrapper .bb-countdown {
    display: flex;
    padding: 6px 10px;
    align-items: center;
    gap: 0px; 
    color: var(--White, var(--White, #FFF));
text-align: center;
border-radius: 4px;
background: var(--ff-1-a-7-a, rgba(255, 26, 122, 0.20));
font-size: 18px;
font-style: normal;
font-weight: 800;
line-height: normal;
letter-spacing: 1.8px; 
}

#bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-countdown-container  .bb-countdown-wrapper  .bb-countdown-footer {
    color: var(--White, var(--White, #FFF));
text-align: center;
font-size: 10px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 1px;
text-transform: uppercase; 
}

#bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-countdown-container .bb-addendum {
    color: var(--White, var(--White, #FFF));
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal; 
}

@media screen and (max-width: 1440px) {
    #bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core {
        gap: 30px;
    }
    #bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-logo {
        width: 220px;
        margin-right: 50px;
    }

    #bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-countdown-container {
        width: auto;
    }

    #bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-countdown-container .bb-countdown-wrapper {
        display: flex;
        flex-direction: column;
        gap: 4px;
        align-items: center
    }

    #bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-countdown-container .bb-countdown-wrapper .bb-countdown {
        display: flex;
        padding: 0px;
        color: var(--White, var(--White, #FFF));
    background: transparent;
    font-size: 12px;
    }

    #bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-slogan {
        gap: 30px;
    }

}


@media screen and (max-width: 1234px) {
    #bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-slogan {
        flex-direction: column;
        gap: 0px
    }

    #bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-slogan .bb-title-container {
        width: auto;
    }

    #bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-slogan .bb-title-container .bb-title, 
    #bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-slogan .bb-title-container .bb-subtitle,
    #bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-countdown-container .bb-addendum {
        font-size: 12px;
    }

    #bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-logo {
        margin-right: 30px;
    }

    #bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-slogan .bb-prelude , #bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-slogan .bb-interlude {
        font-size: 15px;
    }

    #bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-logo {
        width: 43.333px;
    height: 44px; 
    background-image: url('https://vueschool.io/images/banners/assets/CERTIFICATES/mark.svg');
        position: relative;
        margin-right: 60px;
    }
}


@media screen and (max-width: 768px){
    #bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-slogan {
       row-gap: 0px;
       column-gap: 5px;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        
    }

    #bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-slogan .bb-title-container {
        width: 80%;
    }


    #bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-logo, #bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-button-wrapper {
        display: none;
    }

    #bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core {
        display: flex;
        flex-direction: column;
        gap: 0px;
    }

    #bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-slogan .bb-prelude, 
    #bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-slogan .bb-interlude,
    #bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-slogan .bb-title-container .bb-title, 
    #bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-slogan .bb-title-container .bb-subtitle,
    #bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-countdown-container .bb-addendum,
    #bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-countdown-container .bb-countdown-wrapper .bb-countdown {
        font-size: 11px;
    }

    #bb-banner.bb-campaign-cert-free-weekend-live-affiliates .bb-core .bb-countdown-container .bb-countdown-wrapper {
        display: flex;
        flex-direction: row;
        gap: 3px;
        align-items: center
    }

}

/* Vue Router and Pinia */

html.has-bb-banner .theme,
html.has-bb-banner .theme .nav-bar,
html.has-bb-banner .theme .sidebar,
html.has-bb-banner .theme .page {
  margin-top: 72px;
}

/* Vite Press */

html.has-bb-banner {
  scroll-padding-top: 134px;
  overflow: auto;
}

html.has-bb-banner .VPSidebar,
html.has-bb-banner .VPDoc.has-sidebar.has-aside .aside-container {
  top: 72px;
}

@media (min-width: 960px) {
  html.has-bb-banner .VPNav {
    top: 72px;
  }
}

`

try {
  window.BitterBrainsBanner.init()
} catch (e) {
  console.warn('Error when trying to render top banner')
}
