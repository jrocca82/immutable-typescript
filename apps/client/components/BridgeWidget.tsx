import { useEffect } from 'react';
import { checkout } from '@imtbl/sdk';
import { Flex } from '@chakra-ui/react';

// create Checkout SDK
const checkoutSDK = new checkout.Checkout();

export const BridgeWidget = () => {
    useEffect(() => {
        (async () => {
          const widgets = await checkoutSDK.widgets({
            config: { theme: checkout.WidgetTheme.DARK },
          });
          const bridge = widgets.create(checkout.WidgetType.BRIDGE);
          bridge.mount('bridge');
        })();
      }, []);
    
      return <Flex id="bridge" />;
}