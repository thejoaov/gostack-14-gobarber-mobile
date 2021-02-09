import { Container, Section } from 'components'
import React from 'react'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import { useTheme } from 'styled-components/native'

const CardSkeleton = (): JSX.Element => {
  const { colors } = useTheme()

  return (
    <Section
      height={110}
      marginBottom={16}
      padding={20}
      borderRadius={10}
      alignItems="center"
      flexDirection="row"
      backgroundColor={colors.black.shape}>
      <SkeletonPlaceholder backgroundColor={colors.gray.gray}>
        <SkeletonPlaceholder.Item
          flexDirection="row"
          alignItems="center"
          height="100%">
          <SkeletonPlaceholder.Item width={60} height={60} borderRadius={50} />
          <SkeletonPlaceholder.Item marginLeft={20}>
            <SkeletonPlaceholder.Item
              width={160}
              height={20}
              borderRadius={4}
            />
            <SkeletonPlaceholder.Item flexDirection="row" marginTop={6}>
              <SkeletonPlaceholder.Item
                width={15}
                height={15}
                borderRadius={4}
                marginRight={10}
              />
              <SkeletonPlaceholder.Item
                width={80}
                height={15}
                borderRadius={4}
              />
            </SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item flexDirection="row" marginTop={6}>
              <SkeletonPlaceholder.Item
                width={15}
                height={15}
                borderRadius={4}
                marginRight={10}
              />
              <SkeletonPlaceholder.Item
                width={80}
                height={15}
                borderRadius={4}
              />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </Section>
  )
}

const TitleSkeleton = (): JSX.Element => {
  const { colors } = useTheme()

  return (
    <Section mt={32} mb={24}>
      <SkeletonPlaceholder backgroundColor={colors.gray.gray}>
        <SkeletonPlaceholder.Item height={30} width={180} borderRadius={5} />
      </SkeletonPlaceholder>
    </Section>
  )
}

const Skeleton = (): JSX.Element => (
  <Container paddingX={24}>
    <TitleSkeleton />
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
  </Container>
)

export default Skeleton
