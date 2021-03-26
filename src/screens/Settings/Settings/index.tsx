import React from 'react'
import { Container, ScrollView, Text } from 'components'
import { useTranslation } from 'react-i18next'

import Header from '../components/Header'
import { Props } from './types'

const Settings = ({ navigation }: Props): JSX.Element => {
  const { t } = useTranslation('settings')

  return (
    <>
      <Header title="settings" />
      <Container center>
        <Text>Settings</Text>
      </Container>
    </>
  )
}

export default Settings
