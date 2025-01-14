import React, { SVGProps } from 'react';

function Web3Logo(props: Partial<SVGProps<SVGSVGElement>>) {
  return (
    <div className='logo-wrap'>
      <svg
        className='web3-logo'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        version='1.1'
        width='100%'
        height='100%'
        viewBox='0 0 640 640'
        xmlSpace='preserve'
        {...props}
      >
        <desc>Created with Fabric.js 4.6.0</desc>
        <defs></defs>
        <g transform='matrix(7.89 0 0 8.61 320 320)' id='XMK7_ZUBHHDyY5X6AEMad'>
          <g vector-effect='non-scaling-stroke'>
            <g transform='matrix(1 0 0 1 0 23.2)' id='i6nSNv03SfxrIzkfcIOXo'>
              <path
                vector-effect='non-scaling-stroke'
                transform=' translate(-40, -63.2)'
                d='M 80 56.2 L 40 76.6 L 0 56.2 L 12.4 49.800000000000004 L 40 63.800000000000004 L 67.6 49.800000000000004 L 80 56.2 z'
                stroke-linecap='round'
              />
            </g>
            <g transform='matrix(1 0 0 1 0 7.1)' id='cN9E2MKfMTUBK255LMRxN'>
              <path
                vector-effect='non-scaling-stroke'
                transform=' translate(-40, -47.1)'
                d='M 67.6 33.7 L 40 47.8 L 12.399999999999999 33.8 L 0 40.1 L 40 60.5 L 80 40.1 L 67.6 33.7 z'
                stroke-linecap='round'
              />
            </g>
            <g transform='matrix(1 0 0 1 0 -16.1)' id='8y9dGo9gdKI3Cn4eEdnZV'>
              <path
                vector-effect='non-scaling-stroke'
                transform=' translate(-40, -23.9)'
                d='M 40 3.4 L 0 24 L 40 44.4 L 80 24 L 40 3.4 z'
                stroke-linecap='round'
              />
            </g>
          </g>
        </g>
      </svg>
      <div className='web3-logo-spacer'></div>
      <div className='web3-logo-text'>Web 3</div>
    </div>
  );
}

Web3Logo.displayName = 'Web3Logo';

export default Web3Logo;
