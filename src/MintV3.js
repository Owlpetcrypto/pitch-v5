import React from "react";
import { useState, useEffect } from "react";
import Web3 from "web3";
import Web3EthContract from "web3-eth-contract";
import { ethers } from 'ethers'
import keccak256 from 'keccak256'
import MerkleTree from 'merkletreejs'
import { 
	Flex,
	Image,
	Text,
	ChakraProvider,
} from "@chakra-ui/react";
import Navbar from "./Navbar";
import wlt from './json/TEAM.json';
import wlw from './json/WL.json';
import nft3 from "./images/PITCH_OGPASS_Brrrr_02_1.mp4"
import nft2 from "./images/PITCH_OGPASS_MatchDay_03_1.mp4"
import nft1 from "./images/PITCH_OGPASS_StreetPitch_03_1.mp4"
import nft4 from "./images/OGPass_1.mp4"
import bkg1 from "./images/PITCH_OGPASS_Streetpitch.jpg"
import bkg2 from "./images/PITCH_OGPASS_Matchday.jpg"
import bkg3 from "./images/PITCH_OGPASS_Brrrr.jpg"
import contractABI from "./json/contract_abi_v3_eth.json";
const NUM_TOKENS = 3
const tokenIds = [11,22,33]; //[69,420,333]
const maxSupply = 640;
const OS_LINK = "https://opensea.io/collection/pitch-og-pass"

// const CHAIN_ID = 5
// const CHAIN_NAME = "GOERLI"
// const CONTRACT_ADDRESS = "0x0e5d6e724C17dD6299D143B26C921F4BD48Cb86c"
const CHAIN_ID = 1
const CHAIN_NAME = "ETH"
const CONTRACT_ADDRESS = "0x2a81E1Cf399f3E15716c6A07755FC94cC5AB06d6"

const bkgSrcs = [bkg1, bkg2, bkg3]
const vidSrcs = [nft1, nft2, nft3]

const Mint = () => {
    const [isVideoLoaded,     setIsVideoLoaded    ] = useState(false);
    const [tokenIndex,        setTokenIndex       ] = useState(0);

    const onLoadedData = () => {
        setIsVideoLoaded(true)
    }

    return (
        <ChakraProvider>
        	<Flex id="MintTopFlex" direction="column" w="100vw" height="100vh" className='greenPitchBkg' fontFamily="PoppinsMedium" color="white">
                <Navbar />
                <Flex w={["100%", "50%"]} height={["70%"]} mt={["0", "12"]} bg="rgba(255,255,255,0.05)" borderRadius="8px" ml={[0, "25%"]} padding={["4%","1%"]} direction="column" align="center">
                    <h1 className="mintHeader" fontFamily="PoppinsExtraBold" fontSize="24px">Pitch Mint</h1>

                    <Text marginBottom="12px">Wallet Address: 0x...????</Text>
                    <button className="ConnectMintButton">Mint</button>

                    <Flex marginTop="24px" marginBottom="12px" direction="row">
                        <button className="pmButton">-</button>
                        <Text w="12px" fontSize="24px">0</Text>
                        <button className="pmButton">+</button>
                    </Flex>

                    <Text fontSize="24px" marginBottom="0px">Token Id: </Text>
                    <Text fontSize="18px" marginBottom="12px">Supply: </Text>
                    <Flex direction="row">
                        <button className="tokenIdPM" fontSize="96px">&lt;</button>

                        {!isVideoLoaded ?
                            <Image width="250px" src={bkgSrcs[tokenIndex]}></Image>
                        :
                            <video controls src={vidSrcs[tokenIndex]} width="250" onLoadedData={onLoadedData}>
                            </video>
                        }
                        <video controls src={vidSrcs[tokenIndex]} width="0" onLoadedData={onLoadedData} style={{opacity: 0}}>
                        </video>
                        
                        <button className="tokenIdPM">&gt;</button>
                    </Flex>
                </Flex>
            </Flex>
        </ChakraProvider>
    );
};

export default Mint;
