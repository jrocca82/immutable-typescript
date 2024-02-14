import { trpc } from "@roccaweb/lib/server/utils/trpc"
import { Heading, chakra, Text, Flex, Spinner } from "@chakra-ui/react";
import { SplideSlide } from "@splidejs/react-splide";
import Link from "next/link";
import { useRouter } from "next/router";

export const CarouselItem = ({ repoName, link }: { repoName: string, link?: string }) => {
    const { data: repoLangs, isLoading } = trpc.github.getRepoLanguages.useQuery({
        repoName: repoName,
    });

    const router = useRouter();

    return (
        <Item>
            {link ? <Link href={link} target="_blank"><Heading>{repoName.toUpperCase()}</Heading></Link> : <Heading>{repoName.toUpperCase()}</Heading>}
            <Text m="20px" fontWeight="700">Languages:</Text>
            <Flex w="100%" justifyContent="space-around" flexWrap="wrap">
                {isLoading && <Spinner />}
                {repoLangs?.map((lang) =>
                    <Text bgColor="red.500" padding="5px" borderRadius="xl">{lang}</Text>
                )}
            </Flex>
            <Flex w="100%" justify="space-around" mt="20px">
                <Link target="_blank" href={`https://github.com/jrocca82/${repoName}`}>View Code</Link>
                {link && <Link href={link} target="_blank">View App</Link>}
            </Flex>
        </Item>
    )
};

const Item = chakra(SplideSlide, {
    baseStyle: {
        bgColor: "white.500",
        w: "350px",
        borderRadius: "md",
        alignItems: "center",
        justifyContent: "center",
        paddingY: "30px",
        textAlign: "center",
    },
});