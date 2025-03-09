import { HStack, Skeleton, SkeletonCircle, Stack } from "@chakra-ui/react"

export default function ProfileSkeleton() {
  return (
    <div className="w-full flex items-center justify-center mt-10">
      <HStack w="fit-content" align="center" justify="center" gap="8">
        <SkeletonCircle size="32" />
        <Stack w="200px" gap="">
          <Skeleton height="4" />
          <Skeleton height="4" />
          <Skeleton height="4" />
        </Stack>
      </HStack>
    </div >
  );
}

