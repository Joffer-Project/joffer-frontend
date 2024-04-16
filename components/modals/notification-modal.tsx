"use client";
import { toast } from "react-hot-toast";
import { useState } from "react";

import { Modal } from "@/components/ui/modal";

export const NotificationModal = () => {
  const [loading, setLoading] = useState(false);

  const onAction = async (type: string) => {
    try {
      setLoading(true);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title={"Notification Details"}
      description={"Notification Details"}
      isOpen={false}
      onClose={() => {}}
    >
      <div>
        Test
      </div>
    </Modal>
  );
};
