import { ReactNode } from "react";
import { Flex, chakra } from "@chakra-ui/react";
import { Splide, SplideTrack } from "@splidejs/react-splide";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

export const CarouselWrapper = ({ children }: { children: ReactNode }) => (


    <Wrapper aria-label="repos carousel" options={{ rewind: true, autoplay: true, gap: 10, autoWidth: true }} hasTrack={false} draggable>
        <Flex flexDir="column">
            <SplideTrack>
                {children}
            </SplideTrack>
            <Flex className="splide__arrows" w="100%" justify="space-evenly" mt="20px">
                <ArrowBackIcon boxSize="30px" className="splide__arrow splide__arrow--prev" />
                <ArrowForwardIcon boxSize="30px" className="splide__arrow splide__arrow--next" />
            </Flex>
        </Flex>
    </Wrapper>
);

const Wrapper = chakra(Splide, {
    baseStyle: {
        color: "black",
        width: {base: "350px", lg: "1000px"}
    },
});