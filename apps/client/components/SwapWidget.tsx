import { useEffect } from 'react';
import { checkout } from '@imtbl/sdk';

// create Checkout SDK
const checkoutSDK = new checkout.Checkout();

export const SwapWidget = () => {
    useEffect(() => {
        (async () => {
          const widgets = await checkoutSDK.widgets({
            config: { theme: checkout.WidgetTheme.DARK },
          });
          const swap = widgets.create(checkout.WidgetType.SWAP)
          swap.mount("swap");
        })();
      }, []);
    
      return (<div id="swap" />);
}