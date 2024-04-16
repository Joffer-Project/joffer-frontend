"use client";

import { useEffect, useState } from "react";

import { NotificationModal } from "@/components/modals/notification-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <NotificationModal />
    </>
  );
}
