import { useEffect } from "react";
import { checkout } from "@imtbl/sdk";

// create Checkout SDK
const checkoutSDK = new checkout.Checkout();

export const RampWidget = () => {
	useEffect(() => {
		(async () => {
			const widgets = await checkoutSDK.widgets({
				config: { theme: checkout.WidgetTheme.DARK },
			});
			const onramp = widgets.create(checkout.WidgetType.ONRAMP);
			onramp.mount("onramp");
		})();
	}, [checkout]);

	return <div id="onramp" />;
};
