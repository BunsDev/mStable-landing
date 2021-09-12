import React, { FC, ReactNode } from 'react'
// @ts-ignore

import { Section } from '../layout/Section'
import styled from 'styled-components'
import { Colors } from '../../theme'
import { LinkButton } from '../CTA'

interface Product {
  key: string
  title: string
  tagline: string
  icon: ReactNode
  hue: string
  buttonTitle: string
  buttonBg: string
  bg: string
  href: string
}

const AMMIcon = (
  <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.5854 10.4899L15.5199 11.1589L17.5233 2.70694L17.5515 2.68941L17.5285 2.6843L17.5344 2.66239L17.5062 2.67919L8.88741 0.728516L8.20702 3.61692L11.9132 4.39616L0 11.7081L1.62864 14.2788L13.4691 7.01069L12.5854 10.4899Z"
      fill={Colors.neonOrange}
    />
    <path
      d="M33.4861 9.81946C30.6677 9.81909 27.9101 10.6263 25.55 12.1426C23.1898 13.6589 21.3291 15.8187 20.1951 18.3583C19.2266 18.1761 18.2428 18.0844 17.2568 18.0844C8.6588 18.0844 1.68939 24.945 1.68939 33.4072C1.68939 41.8694 8.6588 48.7285 17.2568 48.7285C24.1098 48.7285 29.9284 44.37 32.0074 38.3164C32.4987 38.3651 32.9923 38.3895 33.4861 38.3894C41.4995 38.3894 48 31.9933 48 24.1037C48 16.2141 41.5017 9.81946 33.4861 9.81946ZM39.5518 30.0755C38.7571 30.862 37.8118 31.4855 36.7706 31.91C35.7295 32.3345 34.6131 32.5514 33.4861 32.5484C33.2546 32.5484 33.0254 32.5389 32.7976 32.5213C32.6571 30.1156 31.9416 27.7765 30.7094 25.6943C29.4773 23.6121 27.7631 21.8455 25.7065 20.5383C26.2359 19.4206 27.0075 18.4306 27.9671 17.6378C28.9268 16.845 30.0512 16.2686 31.2613 15.9493C32.4715 15.6299 33.738 15.5753 34.9718 15.7893C36.2057 16.0032 37.377 16.4805 38.4035 17.1877C39.4299 17.8948 40.2865 18.8146 40.9132 19.8825C41.5398 20.9503 41.9213 22.1403 42.0307 23.3688C42.1402 24.5973 41.9749 25.8344 41.5467 26.9933C41.1184 28.1522 40.4375 29.2033 39.5518 30.0755Z"
      fill={Colors.neonOrange}
    />
  </svg>
)

const SaveIcon = (
  <svg width="48" height="40" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 34.8718H48V40H0V34.8718Z" fill={Colors.neonBlue} />
    <path d="M43.6364 0H48C48 28.5714 24.7273 40 0 40V35.5556C36.0727 35.5556 44.1212 11.9048 43.6364 0Z" fill={Colors.neonBlue} />
  </svg>
)

const StkMTAIcon = (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.4165 25.958L37.7189 37.372L41.567 30.4452L27.7338 19.734L33.0997 13.4507L17.1387 0L0 20.1765L15.8458 33.6496L22.4165 25.958ZM10.3854 19.3354L18.0043 10.3647L22.6783 14.3043L15.0172 23.2706L10.3854 19.3354Z"
      fill={Colors.neonPink}
    />
    <path d="M48 42.1094H0.764771V47.9999H48V42.1094Z" fill={Colors.neonPink} />
  </svg>
)

const mAssetIcon = (

  <svg width="60" height="60" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M416,216A80,80,0,1,0,399.993,57.609a80.013,80.013,0,0,0-94.7,64.153A159.768,159.768,0,0,0,232,104c-88.224,0-160,71.775-160,160s71.776,160,160,160,160-71.775,160-160a159.538,159.538,0,0,0-7.333-48.017,80.021,80.021,0,0,0,15.318-1.59A80.586,80.586,0,0,0,416,216Zm64-80a64.1,64.1,0,0,1-44.119,60.823,79.841,79.841,0,0,0,0-121.646A64.1,64.1,0,0,1,480,136ZM384,72a64,64,0,1,1-64,64A64.072,64.072,0,0,1,384,72ZM311.878,256c-1.523-55.576-18.7-92.817-33.225-114.567a157.872,157.872,0,0,0-13.589-17.587,143.173,143.173,0,0,1,39.02,15.479A80.135,80.135,0,0,0,367.158,214.2a142.93,142.93,0,0,1,8.616,41.8ZM224,121.927V256H168.127c1.481-51.035,16.93-85.053,30-104.894C208.243,135.757,218.453,126.385,224,121.927ZM224,272V405.925a134.978,134.978,0,0,1-25.818-29.711C175.365,341.263,169.041,301.557,168.127,272Zm16,133.927V272h55.869c-1.508,50.127-16.968,84.173-30.051,104.214A135.026,135.026,0,0,1,240,405.927ZM240,256V121.927c5.547,4.458,15.757,13.83,25.87,29.179,22.813,34.625,29.11,74.833,30.007,104.894ZM198.947,123.834a157.713,157.713,0,0,0-13.6,17.6c-14.525,21.75-31.7,58.991-33.225,114.567h-63.9C91.774,191.524,137.93,138.22,198.947,123.834ZM88.226,272h63.9c1.548,54.593,18.7,91.841,33.2,113.786A164.457,164.457,0,0,0,199.511,404.3C138.214,390.116,91.785,336.675,88.226,272ZM264.489,404.3a164.457,164.457,0,0,0,14.185-18.518c14.5-21.945,31.653-59.193,33.2-113.786h63.9C372.215,336.675,325.786,390.116,264.489,404.3ZM79.265,416.735A216,216,0,0,1,214.622,48.7l-3.06-2.04a8,8,0,0,1,8.876-13.312l24,16a8,8,0,0,1,0,13.312l-24,16a8,8,0,1,1-8.876-13.312l.533-.355C111.125,75.011,32,160.437,32,264c0,110.28,89.72,200,200,200s200-89.72,200-200a8,8,0,0,1,16,0A216,216,0,0,1,79.265,416.735ZM392,152a8.009,8.009,0,0,0-8-8,24,24,0,0,1-8-46.624V96a8,8,0,0,1,16,0h8a8,8,0,0,1,0,16H384a8,8,0,0,0,0,16,24,24,0,0,1,8,46.624V176a8,8,0,0,1-16,0h-8a8,8,0,0,1,0-16h16A8.009,8.009,0,0,0,392,152Z"
      fill = {Colors.neonPurple}
    />
    </svg>

)

const PRODUCTS: Product[] = [
  {
    key: 'Enchant',
    title: 'SoulPower',
    tagline: 'Our native utility token, which enables governance and fee-accumulation',
    icon: mAssetIcon,
    hue: Colors.neonPurple,
    buttonTitle: 'Use SoulPower',
    buttonBg: Colors.neonPurpleTransparent,
    bg: Colors.neonPurpleDark,
    href: 'https://exchange.soulswap.finance',
  },
  {
    key: 'amm',
    title: 'Exchange',
    tagline: 'Capital efficient AMM that supports low slippage token swaps',
    icon: AMMIcon,
    hue: Colors.neonOrange,
    buttonTitle: 'Swap ERC20 Tokens',
    buttonBg: Colors.neonOrangeTransparent,
    bg: Colors.neonOrangeDark,
    href: 'https://exchange.soulswap.finance',
  },
  {
    key: 'earn',
    title: 'Earn',
    tagline: 'Share a portion of our protocol fees by adding value to the ecosystem.',
    icon: SaveIcon,
    hue: Colors.neonBlue,
    buttonTitle: 'Start Earning',
    buttonBg: Colors.neonBlueTransparent,
    bg: Colors.neonBlueDark,
    href: 'https://soulswap.finance/#/farms',
  },
  {
    key: 'stake',
    title: 'Governance',
    tagline: 'SOUL stakers earn by governing and securing SEANCE for time-weighted voting power',
    icon: StkMTAIcon,
    hue: Colors.neonPink,
    buttonTitle: 'Govern Soul',
    buttonBg: Colors.neonPinkTransparent,
    bg: Colors.neonPinkDark75,
    href: 'https://governance.mstable.org',
  },
]

const ComingSoon = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;

  > h3 {
    font-weight: 600;
    padding: 0.5rem 1rem;
    background: ${Colors.spaceBlueLightTransparent};
    border-radius: 0.75rem;
    font-size: 1rem;
    color: rgba(255, 255, 2550.75);
  }
`

const CardContainer = styled.div<{ hue: string; bg: string; buttonBg: string }>`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  align-items: center;
  border-radius: 1rem;
  background: ${({ bg }) => bg};

  > div:first-child {
    height: 4.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    height: 15rem;
    justify-content: space-between;

    * {
      font-weight: 500;
      text-align: center;
    }

    h3 {
      font-size: 1.875rem;
      color: ${({ hue }) => hue};
      text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.15);
    }

    p {
      opacity: 0.8;
      font-size: 1rem;
    }

    button {
      background: ${({ buttonBg }) => buttonBg};
      border-radius: 0.75rem;
      font-size: 1.125rem;
      appearance: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem 0;
      width: 100%;
      color: ${({ hue }) => hue};

      &:hover {
        box-shadow: 0 0 0.5rem ${({ buttonBg }) => buttonBg};
        transform: scale(1.02);
      }
    }
  }
`

const Inner = styled.div`
  display: grid;
  overflow-x: scroll;
  grid-template-columns: repeat(3, 1fr) 1px;
  padding: 0 0 1rem 1rem;

  > * {
    margin-right: 1rem;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &:after {
    content: '';
    display: block;
  }

  > div {
    width: 18rem;
  }

  @media (min-width: 480px) {
    > * {
      margin-right: 2rem;
    }

    padding: 0 0 1rem 2rem;
  }

  // (n * width) + (n + 1) * margin
  @media (min-width: 62rem) {
    display: flex;
    justify-content: center;
  }
`

const Container = styled(Section)`
  > div:last-child {
    padding: 0;
  }
`

const Card: FC<Product> = ({ title, tagline, icon, bg, hue, buttonBg, href, buttonTitle }) => (
  <CardContainer hue={hue} bg={bg} buttonBg={buttonBg}>
    <div>{icon}</div>
    <div>
      <h3>{title}</h3>
      <p>{tagline}</p>
      <LinkButton href={href}>{`${buttonTitle}`}</LinkButton>
    </div>
  </CardContainer>
)

export const Products: FC = () => (
  <Container h1="Our Products">
    <Inner>
      {PRODUCTS.map((product) => (
        <Card {...product} />
      ))}
    </Inner>
    <ComingSoon>
      <h3>More Coming Soon</h3>
    </ComingSoon>
  </Container>
)
