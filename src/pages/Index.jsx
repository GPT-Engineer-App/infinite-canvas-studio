import React, { useState } from "react";
import { Box, Button, Input, Text, VStack, HStack, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, { id: Date.now(), text: inputValue }]);
      setInputValue("");
      onClose();
    }
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <Box p={5}>
      <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={onOpen}>
        Add Item
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a new item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Enter item text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAddItem}>
              Add
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <VStack spacing={4} align="stretch" mt={4}>
        {items.map((item) => (
          <HStack key={item.id} justify="space-between">
            <Text>{item.text}</Text>
            <Button size="sm" colorScheme="red" onClick={() => handleDeleteItem(item.id)}>
              <FaTrash />
            </Button>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
