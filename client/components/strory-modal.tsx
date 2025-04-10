import react from "react";

import { useRef, useState, useEffect, Dispatch, SetStateAction } from "react";
import { Button } from "@heroui/button";
import { Modal, ModalContent, ModalBody, ModalFooter } from "@heroui/modal";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

export default function StoryModal({
  storyChunks,
  isModalOpen,
  setIsModalOpen,
}: {
  storyChunks: string[];
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [readingIndex, setReadingIndex] = useState<number>(0);
  const currentParaRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (readingIndex < 0) setReadingIndex(0);
    if (readingIndex == storyChunks.length)
      setReadingIndex(storyChunks.length - 1);

    if (currentParaRef.current) {
      currentParaRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [readingIndex]);

  return (
    <Modal
      backdrop={"blur"}
      isOpen={isModalOpen}
      onClose={() => {
        setIsModalOpen(false);
        setReadingIndex(0);
      }}
      className="grow h-[calc(100vh-4rem)] w-full max-w-full !my-0">
      <ModalContent>
        <ModalBody className="w-full overflow-y-scroll scrollbar-hide !py-4">
          {storyChunks.map((para, index) => {
            const colorClass = ["text-scene-1", "text-scene-2", "text-scene-3"][
              index % 3
            ];

            const opacity =
              index == Number(readingIndex) ? "opacity-100" : "opacity-20";

            return (
              <p
                key={index}
                ref={index === readingIndex ? currentParaRef : null}
                className={`rounded-md px-2 ${colorClass} ${opacity}`}>
                {para}
              </p>
            );
          })}
        </ModalBody>
        <ModalFooter>
          <Button
            isIconOnly
            isDisabled={readingIndex == 0}
            onPress={() => setReadingIndex((prevIndex) => prevIndex - 1)}>
            <GrFormPrevious />
          </Button>
          <Button
            isIconOnly
            isDisabled={readingIndex == storyChunks.length - 1}
            onPress={() => setReadingIndex((prevIndex) => prevIndex + 1)}>
            <GrFormNext />
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
