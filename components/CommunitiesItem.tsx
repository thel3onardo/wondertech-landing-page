import { Flex, Heading, Icon, Text, Image, Divider, Link, useDisclosure } from '@chakra-ui/react';
import { BsTwitter, BsInstagram, BsDiscord, BsGithub } from 'react-icons/bs';
import { ModalComponent } from './Modal';

interface Socials {
    instagram: string
    twitter: string
    github: string
    discord: string
}

interface CommunityDetails {
    name: string
    description: string,
    imgUrl: string
    imgAlt: string
    socials: Socials 
}

export function CommunitiesItem ({ name, description, imgUrl, imgAlt, socials } : CommunityDetails) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Flex bg="brand.black" maxW="544px" px="20px" py="32px" marginBottom={{ base: '80px', md: '0' }} marginLeft={{ md: '48px' }} cursor="pointer" minHeight="320px" onClick={onOpen}>
                <Flex justify="center" align="center" maxWidth={{ base: '30px', md: '50px'}} maxH={{ base: '30px', md: '50px'}} borderRadius="50%" overflow="hidden" bg="brand.darkGray" marginRight={{ base: '16px', md: '32px'}}>
                    <Image maxW="70%" src={imgUrl} alt={imgAlt} borderRadius="50%"></Image>
                </Flex>
                <Flex
                    flexDir='column'
                    justify='center'
                >
                    <Heading 
                        as="h4" 
                        fontWeight="bold" 
                        fontSize="2xl" 
                        color="brand.white"
                        paddingBottom="1rem"
                    >
                        { name }
                    </Heading>
                    <Text
                        color="brand.gray"
                        noOfLines={4}
                    >
                        { description }
                    </Text>
                    <Divider borderColor="brand.gray" my="6" />
                    <Flex paddingTop="28px">
                        <Link href={socials.twitter} isExternal>
                            <Icon color="brand.white" as={BsTwitter} boxSize="2rem" marginRight="38px" cursor="pointer" transition="color .5s ease" _hover={{ color: 'brand.green' }} />
                        </Link>
                        <Link href={socials.instagram} isExternal>
                            <Icon color="brand.white" as={BsInstagram} boxSize="2rem" marginRight="38px" cursor="pointer" transition="color .5s ease" _hover={{ color: 'brand.green' }} />
                        </Link>
                        <Link href={socials.discord} isExternal>
                            <Icon color="brand.white" as={BsDiscord} boxSize="2rem" marginRight="38px" cursor="pointer" transition="color .5s ease" _hover={{ color: 'brand.green' }} />
                        </Link>
                        <Link href={socials.github} isExternal>
                            <Icon color="brand.white" as={BsGithub} boxSize="2rem" marginRight="38px" cursor="pointer" transition="color .5s ease" _hover={{ color: 'brand.green' }} />
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
            <ModalComponent isOpen={isOpen} onOpen={onOpen} onClose={onClose} title={name} content={description} profilePic={imgUrl} />
        </>
    )
}