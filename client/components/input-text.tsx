import React from "react";

import { Dispatch, SetStateAction } from "react";
import { Button } from "@heroui/button";
import { Textarea } from "@heroui/input";
import { Card, CardBody, CardFooter } from "@heroui/card";

export default function InputText({
  setIsModalOpen,
}: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const handleSubmitText = async () => {
    setIsModalOpen(true);
  };

  return (
    <Card>
      <CardBody>
        <Textarea
          fullWidth
          minRows={10}
          maxRows={10}
          size="lg"
          placeholder="Write your story here"
        />
      </CardBody>
      <CardFooter className="!mt-0 !pt-0">
        <div className="w-full flex justify-end">
          <Button onPress={handleSubmitText}>Submit</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
