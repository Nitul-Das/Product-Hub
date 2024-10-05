import {Button,Container, Flex, Text, HStack,useColorMode} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const {colorMode, toggleColorMode} =  useColorMode()
  return (
		<Container maxW={"1800px"} px={4}>
			<Flex
				h={16}
				alignItems={"center"}
				justifyContent={"space-between"}
				flexDir={{
					base: "column",
					sm: "row",
				}}
			>
			
      <Text
					fontSize={{ base: "22", sm: "28" }}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
					bgGradient={"linear(to-r, cyan.400, blue.500)"}
					bgClip={"text"}
				>
					<Link to={"/"}>Product Hub 🛒</Link>
				</Text>
        <HStack spacing={2} alignItems={"center"}>
		                        <Link to={"/"}>
						 <Button>< FaArrowLeftLong fontSize={20}/></Button> {/* taken from react icon */}
					</Link>
					<Link to={"/create"}>
						 <Button>< PlusSquareIcon fontSize={20}/></Button> {/* taken from react icon */}
					</Link>
          <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <LuSun size='20'/> : <IoMoon /> } {/* taken from react icon */}
         </Button>
				
				</HStack>

        </Flex>
		</Container>
	);
}

export default Navbar
