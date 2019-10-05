'use strict';

const store = new Vuex.Store({
  state: {
    width: 30,
    height: 30,
    iconColor: 'currentColor'
  }
});


const iconBase = {
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
  },

  computed: Vuex.mapState({
    width: state => state.width,
    height: state => state.height,
    iconColor: state => state.iconColor
  }),

  template: `
    <svg xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        :aria-labelledby="iconName"
        viewBox="0 0 18 18"
        role="presentation"
      >

      <title
          :id="iconName"
          lang="en"
        >
        {{iconName}}
      </title>

      <g :fill="iconColor">
        <slot />
      </g>

    </svg>
  `
};


const iconBox = {
  template:
  `
    <path d="M14 2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1L0 9v7a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9l-4-7zM5.732 3h6.535l2.857 5h-3.625a.5.5 0 0 0-.5.5v.411c0 1.044-.761 1.978-1.8 2.079A2.003 2.003 0 0 1 6.999 9v-.5a.5.5 0 0 0-.5-.5H2.874l2.857-5zM16 14.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V10h3.131c.445 1.724 2.006 3 3.869 3s3.424-1.276 3.869-3H16v4.5z"/>
  `
};


const iconCalendar = {
  template:
  `
    <path d="M11.5 11H10V7.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H8v2H6.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM16 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-1 13.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v9z"/>
  `
};


const iconEnvelope = {
  template:
  `
    <path d="M16 3H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1.382 2L9 8.831 3.382 5h11.236zM15 12.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V7.137l5.497 3.723a.976.976 0 0 0 1.006 0L15 7.137V12.5z"/>
  `
};


const iconGarbage = {
  template:
  `
    <g>
      <path d="M17 5h-4V2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3H1a1 1 0 0 0-1 1v1h2v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7h2V6a1 1 0 0 0-1-1zM7 3h4v2H7V3zm7 12H4V7h10v8z"/>
      <path d="M6.5 13h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5zM10.5 13h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5z"/>
    </g>
  `
};


const iconImage = {
  template:
  `
    <g>
      <path d="M17 1H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-1 13.5a.5.5 0 0 1-.5.5H7.402l5.602-5.602L16 12.394V14.5zm0-4.894l-2.17-2.17a.989.989 0 0 0-.832-.435.983.983 0 0 0-.817.418l-7.582 7.582H2.501a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H15.5a.5.5 0 0 1 .5.5v6.106z"/>
      <path d="M6 5a2 2 0 1 0-.001 3.999A2 2 0 0 0 6 5z"/>
    </g>
  `
};


const iconWrite = {
  template:
  `
    <g>
      <path d="M16.001 11a1 1 0 0 0-1 1v2.5a.5.5 0 0 1-.5.5H3.499a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5h2.5a1 1 0 1 0 0-2h-4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14.002a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z"/>
      <path d="M13.169 3.403l1.429 1.429L8.65 11H7V9.35l6.169-5.947zM13.182 1a.994.994 0 0 0-.706.292L5 8.5V13h4.501l7.209-7.475a.997.997 0 0 0 0-1.411l-2.822-2.822A.992.992 0 0 0 13.183 1z"/>  
    </g>
  `
};


const iconMoon = {
  template:
  `
    <path d="M7.246 3.255a6.046 6.046 0 0 0-.198 2.597 5.988 5.988 0 0 0 7.672 4.892c-.674 2.215-2.642 3.926-4.973 4.21a5.994 5.994 0 0 1-5.248-1.977C3.347 11.673 2.83 9.99 3.042 8.238c.284-2.335 1.992-4.307 4.204-4.982zM8.985 1a8.15 8.15 0 0 0-1.104.075c-3.543.48-6.388 3.364-6.82 6.92C.469 12.862 4.245 17 8.985 17c.33 0 .665-.02 1.003-.062 3.549-.433 6.428-3.283 6.907-6.833.052-.383.076-.761.075-1.134-.002-.583-.482-.972-.996-.972a1.02 1.02 0 0 0-.614.207 3.96 3.96 0 0 1-2.383.793c-.188 0-.38-.013-.574-.04-1.732-.242-3.137-1.649-3.378-3.385a3.997 3.997 0 0 1 .751-2.963c.415-.657.025-1.609-.764-1.612h-.028z"/>
  `
};


Vue.component('AnimatedIconScissors', {
  methods: {
    startScissors() {
      this.scissorAnim(this.$refs.rightscissor, 30);
      this.scissorAnim(this.$refs.leftscissor, -30);
    },

    scissorAnim(el, rot) {
        TweenMax.to(el, 0.25, {
          rotation: rot,
          repeat: 3,
          yoyo: true,
          svgOrigin: '50 45',
          ease: Sine.easeInOut
        });
      }
  },

  template:
  `
    <svg @click="startScissors"
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100"
        width="100" 
        height="100" 
        id="iconScissors"
        aria-labelledby="scissors"
        role="presentation"
      >

      <title id="scissors" lang="en">Scissors Animated Icon</title>

      <path id="bk" fill="#fff" d="M0 0h100v100H0z"/>

      <g ref="leftscissor">
        <path d="M57.6 47h-8.7v4.7H53l1.5 45h1.1a24.9 24.9 0 0 0 2-49.7zm1.5 45l-1.5-40.4a20.3 20.3 0 0 1 18.3 20.2c0 10.5-6.5 19.2-16.8 20.2z" fill="#30374b"/>
        <path d="M53.9 50.7l1.5 45.1h.2a24 24 0 0 0 1.9-47.9h-8v2.9zm3.8 0a21.1 21.1 0 0 1 19.1 21.1c0 11.4-7.2 20.1-17.6 21.1h-.9l-1.6-42.3z" fill="none"/>
        <path d="M75 71.8a19.3 19.3 0 0 0-16.5-19.2L60 91c8.9-1.3 15-9.1 15-19.2z" fill="none"/>
        <path d="M59.2 92.9c10.4-1 17.6-9.7 17.6-21.1a21.1 21.1 0 0 0-19.1-21.1h-1L58.3 93zM75 71.8c0 10.1-6.1 17.9-15 19.2l-1.5-38.4A19.3 19.3 0 0 1 75 71.8z" fill="#7f756b"/>
        <path d="M58.5 46.2V46h-9v1.8h8a24 24 0 0 1-1.9 47.9h-.2l-1.5-45h-4.4v1.8h2.7l1.5 45h1.9a25.8 25.8 0 0 0 2.9-51.4z" fill="#7f756b"/>
        <path fill="#a2a1a2" d="M54.6 51.3l.6-49.1-9.6 49.1h9z"/>
        <path d="M55.5 52.1H44.6L54.3 2l1.8.2zm-8.8-1.7h7l.5-38.5z" fill="#7f756b"/>
      </g>

      <g ref="rightscissor">
        <path d="M42.3 46.9a24.9 24.9 0 0 0 0 49.8h1l1.6-45h4v-4.8zM38.8 92C28.5 91 22 82.3 22 71.8a20.3 20.3 0 0 1 18.3-20.2z" fill="#30374b"/>
        <path d="M18.3 71.8a24 24 0 0 0 24 24h.2L44 50.7h5.5v-2.9h-7.2a23.9 23.9 0 0 0-24 24zM39.6 93h-.9c-10.4-1-17.6-9.7-17.6-21.1a21.1 21.1 0 0 1 19.1-21.2h1z" fill="none"/>
        <path d="M22.9 71.8c0 10.1 6.1 17.9 15 19.2l1.5-38.4a19.3 19.3 0 0 0-16.5 19.2z" fill="none"/>
        <path d="M21.1 71.8c0 11.4 7.2 20.1 17.6 21.1h.9l1.6-42.4h-1a21.1 21.1 0 0 0-19.1 21.3zM37.9 91c-8.9-1.3-15-9.1-15-19.2a19.3 19.3 0 0 1 16.5-19.2z" fill="#7f756b"/>
        <path d="M44 50.7l-1.5 45.1h-.2a24 24 0 0 1 0-48h7.2V46h-7.2a25.8 25.8 0 0 0 0 51.6h1.9l1.5-45h3.8v-1.9z" fill="#7f756b"/>
        <path fill="#d3d9df" d="M43.2 51.3l-.6-49.1 9.5 49.1h-8.9z"/>
        <path d="M53.2 52.1H42.3l-.6-49.9 1.7-.2zm-9.1-1.7h7l-7.5-38.5z" fill="#7f756b"/>
      </g>

      <circle cx="48.6" cy="44.5" r="3.7" fill="#e5e8ec"/>
      <path d="M48.6 49.1a4.6 4.6 0 1 1 0-9.1 4.6 4.6 0 0 1 0 9.1zm0-7.4a2.8 2.8 0 0 0-2.8 2.8 2.7 2.7 0 0 0 2.8 2.8 2.8 2.8 0 0 0 2.8-2.8 2.9 2.9 0 0 0-2.8-2.8z" fill="#7f756b"/>

    </svg>
  `
});



Vue.component('AnimatedIconHeartFace', {
  methods: {
    makeHeart() {
      TweenMax.set(this.$refs.heartface, {
        visibility: 'visible'
      });

      const tl = new TimelineMax()

            tl.add('start')
      tl.fromTo(
        this.$refs.eyes,
        0.1,
        {
          scaleY: 1,
          transformOrigin: '50% 50%;'
        },
        {
          scaleY: 0,
          transformOrigin: '50% 50%;',
          repeat: 3,
          yoyo: true,
          ease: Sine.easeInOut
        },
        'start'
      )
      tl.fromTo(
        [this.$refs.blush, this.$refs.eyes],
        0.3,
        {
          y: 0
        },
        {
          y: -5,
          ease: Sine.easeOut
        },
        'start'
      )
      tl.fromTo(
        this.$refs.heartface,
        0.3,
        {
          opacity: 0
        },
        {
          opacity: 1,
          ease: Sine.easeOut
        },
        'start+=0.3'
      )
      tl.from(
        this.$refs.openmouth,
        0.2,
        {
          scaleY: 0,
          ease: Sine.easeOut
        },
        'start+=0.3'
      )
      tl.from(
        this.$refs.hearteyes,
        0.2,
        {
          rotation: 10,
          repeat: 4,
          yoyo: true,
          transformOrigin: '50% 50%',
          ease: Sine.easeOut
        },
        'start+=0.3'
      )
      tl.to(
        this.$refs.heartface,
        0.1,
        {
          opacity: 0,
          ease: Sine.easeIn
        },
        'start+=1.1'
      )
      tl.fromTo(
        this.$refs.eyes,
        0.1,
        {
          scaleY: 1,
          transformOrigin: '50% 50%;'
        },
        {
          scaleY: 0,
          transformOrigin: '50% 50%;',
          repeat: 3,
          yoyo: true,
          ease: Sine.easeInOut
        },
        'start+=1.1'
      )
      tl.to(
        [this.$refs.blush, this.$refs.eyes],
        0.3,
        {
          y: 0,
          ease: Sine.easeIn
        },
        'start+=1.1'
      )
    }
  },

  template:
  `
    <svg 
        @click="makeHeart"
        xmlns="http://www.w3.org/2000/svg" 
        width="100" 
        height="100" 
        viewBox="0 0 120 120"
        aria-labelledby="heartface"
        role="presentation"
      >

      <title id="heartface" lang="en">Smiley face that turns into heart eyes</title>
      <defs>
        <linearGradient id="linear-gradient" x1="55.09" y1="8.79" x2="55.09" y2="95.5" gradientTransform="matrix(1 0 0 -1 10 112)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#f9a65d"/>
          <stop offset="1" stop-color="#fcd25c"/>
        </linearGradient>
      </defs>

      <path ref="bk" fill="#fff" d="M0 0h120v120H0z"/>

      <g ref="originalface">
        <circle cx="65.1" cy="59.9" r="43.4" fill="url(#linear-gradient)"/>
        <path d="M49.5 94.6a44.8 44.8 0 1 1 44.8-44.7 44.8 44.8 0 0 1-44.8 44.7zm0-86.7a42 42 0 1 0 42 42 42 42 0 0 0-42-42z" transform="translate(10 10)" fill="#7f756b"/>

        <g ref="eyes" fill="#7f756b">
          <circle cx="41.5" cy="52" r="5.6"/>
          <circle cx="78.5" cy="52" r="5.6"/>
        </g>

        <g ref="blush" fill="#f15e58">
          <circle cx="80.7" cy="71.8" r="7.9" style="isolation:isolate" opacity=".5"/>
          <circle cx="39.4" cy="70.6" r="7.9" style="isolation:isolate" opacity=".5"/>
        </g>
        <path d="M49.6 67.2h-.8c-9.6-.3-15.7-4.9-15.6-11.8h2.7c0 6.4 7 8.9 13 9 7.6.3 16-3 16.3-8.6h2.7c-.3 7.3-9.4 11.4-18.3 11.4z" transform="translate(10 10)" fill="#7f756b" id="sm-mouth"/>
      </g>

      <g ref="heartface" id="heartface">
        <g ref="hearteyes">
          <path d="M30.6 21.8h-1.5c-3.8 0-5.6 1.7-7.6 4.1-2.1-2.4-3.9-4.1-7.6-4.1h-1.5c-3.3.3-7 3.3-7.5 9v1.9c.4 5.4 4.5 12.1 16.6 20.6 12-8.5 16.1-15.2 16.5-20.6v-1.9c-.5-5.7-4.2-8.7-7.4-9z" transform="translate(10 10)" fill="#e54242"/>
          <path d="M21.5 55l-.8-.6C9.7 46.7 4.1 39.6 3.5 32.8v-2c.6-6.5 4.9-9.9 8.7-10.3s7.2 1.2 9.3 3.3c2-2.1 4.4-3.7 9.2-3.3s8.2 3.8 8.7 10.3v2c-.5 6.8-6.1 13.9-17.1 21.6zM6.3 32.6c.5 5.7 5.6 12.1 15.2 19 9.5-6.9 14.6-13.3 15.1-19v-1.8c-.4-4.8-3.5-7.3-6.2-7.6s-5.5.7-7.9 3.5l-1 1.3-1.1-1.3c-2.4-2.8-3.9-3.9-7.9-3.5S6.7 26 6.3 30.8z" transform="translate(10 10)" fill="#7f756b"/>
          <g>
            <path d="M89.2 21.8h-1.5c-3.8 0-5.6 1.7-7.6 4.1-2.1-2.4-3.9-4.1-7.6-4.1H71c-3.3.3-7 3.3-7.5 9v1.9c.4 5.4 4.5 12.1 16.6 20.6 12-8.5 16.1-15.2 16.5-20.6v-1.9c-.5-5.7-4.2-8.7-7.4-9z" transform="translate(10 10)" fill="#e54242"/>
            <path d="M80.1 55l-.8-.6c-11-7.7-16.6-14.8-17.2-21.6v-2c.5-6.5 4.9-9.9 8.7-10.3a10.5 10.5 0 0 1 9.3 3.3c2-2.1 4.5-3.7 9.2-3.3s8.2 3.8 8.7 10.3v2c-.5 6.8-6.1 13.9-17.1 21.6zM64.9 32.6c.5 5.7 5.6 12.1 15.2 19 9.5-6.9 14.6-13.3 15.1-19v-1.8c-.4-4.8-3.5-7.3-6.2-7.6h-1.3c-3.1 0-4.5 1.1-6.6 3.6l-1 1.3-1.1-1.4c-2.1-2.5-3.5-3.6-6.5-3.6h-1.4c-2.7.3-5.8 2.8-6.2 7.6v1.8z" transform="translate(10 10)" fill="#7f756b"/>
          </g>
        </g>

        <g ref="openmouth">
          <path d="M30.8 54.7a18.7 18.7 0 0 0 37.4 0A22.8 22.8 0 0 0 68 52H31a11.8 11.8 0 0 0-.2 2.7z" transform="translate(10 10)" fill="#493f3c"/>
          <path d="M50 59l17.6.2a16.8 16.8 0 0 0 .6-4.5A22.8 22.8 0 0 0 68 52H31a11.8 11.8 0 0 0-.2 2.7 18.4 18.4 0 0 0 .4 4.1z" transform="translate(10 10)" fill="#fff"/>
          <path d="M62 68.6a18 18 0 0 0-24.5.4 18.6 18.6 0 0 0 12 4.4A19 19 0 0 0 62 68.6z" transform="translate(10 10)" fill="#e54242"/>
          <path d="M49.5 74.8a20.2 20.2 0 0 1-20.1-20.1 15.2 15.2 0 0 1 .2-2.9l.2-1.2h39.4l.2 1.2c.1 1.1.2 2 .2 2.9a20.2 20.2 0 0 1-20.1 20.1zM32.2 53.4v1.3a17.3 17.3 0 0 0 34.6 0v-1.3z" transform="translate(10 10)" fill="#7f756b"/>
        </g>
      </g>
    </svg>
  `
});


Vue.component('AnimatedIconPalette', {
  
  methods: {
    movePalette() {
      const tl = new TimelineMax()
      //pick up here
      tl.add('start')
      this.mPalette(tl, this.$refs.light, -5)
      this.mPalette(tl, this.$refs.med, -15)
      this.mPalette(tl, this.$refs.dark, -25)
      tl.to(
        this.$refs.pen,
        0.6,
        {
          rotation: 20,
          x: 20,
          transformOrigin: '50% 50%',
          ease: Back.easeOut
        },
        'start'
      )
      this.mPBack(tl, this.$refs.light)
      this.mPBack(tl, this.$refs.med)
      this.mPBack(tl, this.$refs.dark)
      tl.to(
        this.$refs.pen,
        0.4,
        {
          rotation: 0,
          x: 0,
          transformOrigin: '50% 50%',
          ease: Sine.easeIn
        },
        'start+=0.7'
      )
    },
    mPalette(tl, el, rot) {
      tl.to(
        el,
        0.6,
        {
          rotation: rot,
          x: 5,
          svgOrigin: '49 82',
          ease: Back.easeOut
        },
        `start`
      )
    },
    mPBack(tl, el) {
      tl.to(
        el,
        0.4,
        {
          rotation: 0,
          x: 0,
          svgOrigin: '49 82',
          ease: Sine.easeIn
        },
        `start+=0.7`
      )
    }
  },

  template:
  `
    <svg 
        @click="movePalette"
        xmlns="http://www.w3.org/2000/svg" 
        width="100" 
        height="100" 
        viewBox="0 0 100 100"
        aria-labelledby="palette"
        role="presentation"
      >
      <title id="palette" lang="en">Animated Color palette</title>
      <path id="bk" fill="#fff" d="M0 0h100v100H0z"/>
      <g id="palette">
        <g ref="dark">
          <path transform="rotate(-64.1 71.508 54.997)" fill="#fff" d="M33.3 42.8h76.3v24.23H33.3z"/>
          <path d="M65 93.5L41.8 82.2l33.9-70L99 23.5zm-21.1-12l20.4 9.9 32.5-67.2-20.3-9.9z" fill="#7f746b"/>
          <path transform="rotate(-64.1 81.575 30.396)" fill="#577f7c" d="M72.5 21.4h18.1v18.05H72.5z"/>
          <path transform="rotate(-64.1 72.191 49.644)" fill="#426662" d="M63.2 40.6h18.1v18.06H63.2z"/>
          <path transform="rotate(-64.1 62.888 68.943)" fill="#375954" d="M53.8 59.9h18.1v18.05H53.8z"/>
        </g>
        <g ref="med">
          <path transform="rotate(-78.9 57.558 49.808)" fill="#fff" d="M19.4 37.7h76.3v24.23H19.4z"/>
          <path d="M61.1 88.7l-25.3-5 15-76.4 25.4 5zm-23.4-6.2l22.2 4.3 14.4-73.2-22.2-4.4z" fill="#7f746b"/>
          <path transform="rotate(-78.9 61.042 23.53)" fill="#88bcbc" d="M52 14.5h18.1v18.05H52z"/>
          <path transform="rotate(-78.9 56.93 44.502)" fill="#78a8a7" d="M47.9 35.5H66v18.05H47.9z"/>
          <path transform="rotate(-78.9 52.758 65.425)" fill="#659391" d="M43.8 56.4h18.1v18.05H43.8z"/>
        </g>
        <g ref="light">
          <path fill="#fff" d="M28 9.6h24.2v76.25H28z"/>
          <path d="M51.2 85.2H25.3V7.4h25.9zm-24.3-1.6h22.6V9H26.9z" fill="#7f746b"/>
          <path fill="#a2dade" d="M29.5 12.2h18.1v18.05H29.5z"/>
          <path fill="#ade8ea" d="M29.5 33.6h18.1v18.05H29.5z"/>
          <path fill="#d0fcfb" d="M29.5 55h18.1v18.05H29.5z"/>
        </g>
      </g>
      <g ref="pen">
        <path transform="rotate(-54.1 25.93 61.88)" fill="#a2dade" d="M-7.7 59.1h67.2v5.53H-7.7z"/>
        <path d="M8.3 91.8l-5.4-3.9 40-55.3 5.3 3.8zm-3.9-4.1L8 90.3l38.7-53.6-3.6-2.6z" fill="#7f746b"/>
        <path d="M35.6 53.1l11.9-16.5-4.5-3.3-11.9 16.5z" fill="#fff"/>
        <path d="M30.3 49.9l12.6-17.3 5.3 3.8-12.5 17.4-.4-.3-4.5-3.2zm12.8-15.8L31.8 49.7l3.6 2.6 11.3-15.6z" fill="#7f746b"/>
        <path transform="rotate(-54.2 4.844 91.005)" fill="#fff" d="M2.9 89.2h4v3.71h-4z"/>
        <path d="M5.3 94.5l-3.9-2.8 3-4.1 3.9 2.8zm-2.4-3L5.1 93l1.7-2.3-2.2-1.6z" fill="#7f746b"/>
        <path transform="rotate(-54.1 40.524 34.025)" fill="#7f746b" d="M39.9 32.9H41v2.24h-1.1z"/>
        <path transform="rotate(-54.1 30.624 47.611)" fill="#7f746b" d="M30.1 46.5h1.1v2.24h-1.1z"/>
        <path transform="rotate(-54.1 34.768 40.221)" fill="#7f746b" d="M25.9 39.7h17.8v1.08H25.9z"/>
      </g>
    </svg>
  `
});



Vue.component('AnimatedIconWatch', {
  methods: {
    watchStart() {
      var tl = new TimelineMax();

      tl.to(this.$refs.hand, 2, {
        rotation: 100,
        svgOrigin: '54 61',
        ease: Elastic.easeOut
      });

      tl.to(this.$refs.hand, 0.5, {
        rotation: 0,
        svgOrigin: '54 61',
        ease: Circ.easeIn
      }, '-=1');
    }
  },

  template:
  `
    <svg 
        @click="watchStart"
        xmlns="http://www.w3.org/2000/svg" 
        width="90" 
        height="90" 
        viewBox="0 0 100 100"
        aria-labelledby="watch"
        role="presentation"
      >
      <title id="watch" lang="en">Watch with a hand that moves</title>
      <path fill="#fff" d="M0 0h100v100H0z"/>
      <path d="M24.4 34.1l-2.4-.2a15.1 15.1 0 0 1-10-6.2 15.5 15.5 0 0 1-2.7-11.6A15.4 15.4 0 0 1 24.5 2.9l2.4.2a15.5 15.5 0 0 1 12.8 17.8 15.5 15.5 0 0 1-15.3 13.2zm.1-27.4a11.7 11.7 0 0 0-11.5 10 11.3 11.3 0 0 0 2.1 8.7 10.7 10.7 0 0 0 7.5 4.7l1.8.2a11.6 11.6 0 0 0 11.5-10 11.7 11.7 0 0 0-9.6-13.5z" fill="#d6dee1"/>
      <path d="M22.5 35.4l-2.5-.2a15.9 15.9 0 0 1-10.6-6.6 16.5 16.5 0 0 1-2.8-12.2 16.2 16.2 0 0 1 16-13.8 11.4 11.4 0 0 1 2.6.2 16.3 16.3 0 0 1 13.4 18.7 16.3 16.3 0 0 1-16.1 13.9zm.1-31.2A14.5 14.5 0 0 0 8.2 16.7a14.6 14.6 0 0 0 12 16.9l2.3.2A14.8 14.8 0 0 0 37 21.3 14.6 14.6 0 0 0 24.9 4.4a8.6 8.6 0 0 0-2.3-.2zm-.1 27.4l-1.9-.2a12.1 12.1 0 0 1-8.1-5 13 13 0 0 1-2.2-9.4A12.5 12.5 0 0 1 22.6 6.4h2a11.9 11.9 0 0 1 8 5.1 11.9 11.9 0 0 1 2.2 9.3 12.5 12.5 0 0 1-12.3 10.8zM22.6 8a10.9 10.9 0 0 0-10.7 9.3 11.3 11.3 0 0 0 1.9 8.2 10.7 10.7 0 0 0 7 4.3l1.7.2a10.8 10.8 0 0 0 10.7-9.3 10.9 10.9 0 0 0-1.9-8.2 10.6 10.6 0 0 0-7-4.4z" fill="#7f746b"/>
      <circle cx="58.1" cy="61.7" r="35.9" fill="#d6dee1"/>
      <path d="M54.3 97.9A36.7 36.7 0 1 1 91 61.2a36.8 36.8 0 0 1-36.7 36.7zm0-71.8a35.1 35.1 0 1 0 35.1 35.1 35.1 35.1 0 0 0-35.1-35.1z" fill="#7f746b"/>
      <path d="M54.3 90.1a29 29 0 1 1 29-28.9 29 29 0 0 1-29 28.9zm0-57.4a28.5 28.5 0 1 0 28.5 28.5 28.5 28.5 0 0 0-28.5-28.5z" fill="#7f746b"/>
      <circle cx="54.3" cy="61.2" r="25.1" fill="#e6edef"/>
      <g fill="#7f746b">
        <circle cx="42.2" cy="45.8" r="1.1"/>
        <circle cx="51.7" cy="41.6" r="1.1"/>
        <circle cx="61.8" cy="43.1" r="1.1"/>
        <circle cx="70.2" cy="49.3" r="1.1"/>
        <circle cx="74.1" cy="58.8" r="1.1"/>
        <circle cx="73.6" cy="68.6" r="1.1"/>
        <circle cx="66.9" cy="77.1" r="1.1"/>
        <circle cx="57.4" cy="81.3" r="1.1"/>
        <circle cx="47.3" cy="79.9" r="1.1"/>
        <circle cx="38.8" cy="73.8" r="1.1"/>
        <circle cx="34.4" cy="64" r="1.1"/>
        <circle cx="35.8" cy="53.7" r="1.1"/>
      </g>
      <g fill="#7f746b" ref="hand">
        <circle cx="54.1" cy="61.9" r="1.7"/>
        <path d="M58.5 54.9L44.2 80.6l13.2-26.3 1.1.6z"/>
      </g>
      <path fill="#b8bfc1" d="M30 22.5l-6.2 4.7 5.7 7.7 6.8-5.1-6.3-7.3z"/>
      <path d="M29.3 36l-6.6-8.9 7.4-5.8 7.4 8.6zm-4.4-8.6l4.7 6.4 5.5-4.1-5.2-6.1z" fill="#7f746b"/>
      <path d="M30.9 20.2a2.1 2.1 0 0 1-.4 3.1l-5.8 4.6a2.1 2.1 0 0 1-3.1-.4L17.2 22a2.1 2.1 0 0 1 .4-3.1l5.8-4.6a2.2 2.2 0 0 1 3.1.3z" fill="#d6dee1"/>
      <path d="M23.3 29.2a3 3 0 0 1-2.4-1.2l-4.3-5.5a2.9 2.9 0 0 1-.7-2.2 2.8 2.8 0 0 1 1.2-2.1l5.8-4.6a3.1 3.1 0 0 1 1.9-.6 3.2 3.2 0 0 1 2.4 1.1l4.3 5.6a2.9 2.9 0 0 1 .7 2.2 2.8 2.8 0 0 1-1.2 2l-5.8 4.6a2.6 2.6 0 0 1-1.9.7zm1.5-14.6a1.6 1.6 0 0 0-.9.3l-5.8 4.6a1.8 1.8 0 0 0-.6.9 2 2 0 0 0 .3 1.1l4.4 5.5a1.5 1.5 0 0 0 2 .3l5.8-4.6a2.1 2.1 0 0 0 .6-1 1.7 1.7 0 0 0-.3-1l-4.4-5.6a1.6 1.6 0 0 0-1.1-.5z" fill="#7f746b"/>
      <g fill="#7f746b">
        <path d="M18.775 20.04l.388-.314 6.174 7.597-.388.315zM19.949 18.853l.388-.315 6.174 7.597-.388.315zM21.29 17.935l.388-.316 6.175 7.598-.388.315zM22.568 16.939l.388-.316 6.175 7.598-.388.315zM23.732 16.083l.388-.315 6.18 7.605-.387.316z"/>
      </g>
    </svg>
  `
});


const app = new Vue({
  el: "#app",
  store,

  components: {
    "iconBase": iconBase,
    "iconWrite": iconWrite,
    "iconBox": iconBox,
    "iconCalendar": iconCalendar,
    "iconEnvelope": iconEnvelope,
    "iconGarbage": iconGarbage,
    "iconMoon": iconMoon,
    "iconImage": iconImage
  },

  template:
  `
    <div id="app">
      <icon-base icon-name="write"><icon-write /></icon-base>
      <icon-base icon-name="box"><icon-box /></icon-base>
      <icon-base icon-name="calendar"><icon-calendar /></icon-base>
      <icon-base icon-name="envelope"><icon-envelope /></icon-base>
      <icon-base icon-name="garbage"><icon-garbage /></icon-base>
      <icon-base icon-name="image"><icon-image /></icon-base>
      <icon-base icon-name="moon"><icon-moon /></icon-base>
      <br>
      <animated-icon-scissors />
      <animated-icon-heart-face />
      <animated-icon-palette />
      <animated-icon-watch />
    </div>
  `
});
