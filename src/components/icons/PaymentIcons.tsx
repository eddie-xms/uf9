interface IconProps {
  className?: string
  size?: number
}

export function VisaIcon({ className, size = 24 }: IconProps) {
  return (
    <img
      src="/icon/visa.svg"
      alt="Visa"
      width={size}
      height={size}
      className={className}
    />
  )
}

export function MastercardIcon({ className, size = 24 }: IconProps) {
  return (
    <img
      src="/icon/mastercard.svg"
      alt="Mastercard"
      width={size}
      height={size}
      className={className}
    />
  )
}

export function BitcoinIcon({ className, size = 24 }: IconProps) {
  return (
    <img
      src="/icon/bitcoin.svg"
      alt="Bitcoin"
      width={size}
      height={size}
      className={className}
    />
  )
}

export function UsdtIcon({ className, size = 24 }: IconProps) {
  return (
    <img
      src="/icon/usdt.svg"
      alt="USDT"
      width={size}
      height={size}
      className={className}
    />
  )
}

export function DuitNowIcon({ className, size = 24 }: IconProps) {
  return (
    <img
      src="/icon/duitnow.svg"
      alt="DuitNow"
      width={size}
      height={size}
      className={className}
    />
  )
}
