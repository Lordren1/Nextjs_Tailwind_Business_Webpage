import Link from "next/link";


type HeaderLogoProps = {
  sticky: boolean;
}


export default function Logo({ sticky }: HeaderLogoProps) {

  return (
    <>
      <Link 
        href="/"
        className={ `whitespace-nowrap font-mona font-bold logo text-l xl:text-3xl
          ${ sticky ? "text-dark hover:text-prim" : "text-white hover:text-prim-light"}
          `}
      >
        SwiftCharge
      </Link>
    </>
  )
}