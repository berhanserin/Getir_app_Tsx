import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import CustomButtoms from 'commons/CustomButtoms';
import Textinput from 'commons/Textinput';
import * as yup from 'yup';
import {Formik} from 'formik';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

interface registerPageProps {
  navigation: NavigationProp<ParamListBase>;
}

const RegisterPage = (props: registerPageProps) => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={'height'}
        keyboardVerticalOffset={250}
        style={{flex: 1}}
        enabled>
        <View style={[styles.loginArea, {height: height * 0.7}]}>
          <Formik
            validationSchema={yup.object().shape({
              uname: yup
                .string()
                .min(5, ({min}) => `Minimum ${min} Harf Giriniz.`)
                .required('Kullanıcı Adı Zorunlu'),
              name: yup
                .string()
                .min(5, ({min}) => `Minimim ${min} Harf Giriniz.`)
                .required('İsim Zorunlu'),
              email: yup.string().email().required('Email adresi zorunlu'),
              password: yup
                .string()
                .min(5, ({min}) => `Minimim ${min} Harf Giriniz.`)
                .required('Şifre Zorunlu'),
            })}
            initialValues={{
              uname: '',
              name: '',
              email: '',
              password: '',
            }}
            onSubmit={async values => {
              console.log(values);
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              resetForm,
              isValid,
            }) => (
              <ScrollView
                style={{marginHorizontal: 10, marginTop: 30, flex: 1}}>
                <View style={{flex: 1}}>
                  <View>
                    <Textinput
                      passwordRole={false}
                      value={values.uname}
                      ChangeText={handleChange('uname')}
                      Blur={handleBlur('uname')}
                      placeHolders={'Kullanıcı Adı'}
                      placeHoldersColor={'#5056F1'}
                      BorderColor={'#5056F1'}
                      BorderWidth={1.5}
                      BorderRadius={20}
                    />
                    {errors.uname ? (
                      <View style={{alignItems: 'center', marginBottom: 5}}>
                        <Text style={{color: 'red'}}>{errors.uname}</Text>
                      </View>
                    ) : (
                      <View style={{marginBottom: 5}} />
                    )}
                  </View>
                  <View>
                    <Textinput
                      passwordRole={false}
                      value={values.name}
                      ChangeText={handleChange('name')}
                      Blur={handleBlur('name')}
                      placeHolders={'İsim'}
                      placeHoldersColor={'#5056F1'}
                      BorderColor={'#5056F1'}
                      BorderWidth={1.5}
                      BorderRadius={20}
                    />
                    {errors.name ? (
                      <View style={{alignItems: 'center', marginBottom: 5}}>
                        <Text style={{color: 'red'}}>{errors.name}</Text>
                      </View>
                    ) : (
                      <View style={{marginBottom: 5}} />
                    )}
                  </View>
                  <View>
                    <Textinput
                      passwordRole={false}
                      value={values.email}
                      ChangeText={handleChange('email')}
                      Blur={handleBlur('email')}
                      placeHolders={'Email'}
                      placeHoldersColor={'#5056F1'}
                      BorderColor={'#5056F1'}
                      BorderWidth={1.5}
                      BorderRadius={20}
                    />
                    {errors.email ? (
                      <View style={{alignItems: 'center', marginBottom: 5}}>
                        <Text style={{color: 'red'}}>{errors.email}</Text>
                      </View>
                    ) : (
                      <View style={{marginBottom: 5}} />
                    )}
                  </View>
                  <View>
                    <Textinput
                      passwordRole={true}
                      value={values.password}
                      ChangeText={handleChange('password')}
                      Blur={handleBlur('password')}
                      placeHolders={'Şifre'}
                      placeHoldersColor={'#5056F1'}
                      BorderColor={'#5056F1'}
                      BorderWidth={1.5}
                      BorderRadius={20}
                    />
                    {errors.password ? (
                      <View style={{alignItems: 'center', marginBottom: 5}}>
                        <Text style={{color: 'red'}}>{errors.password}</Text>
                      </View>
                    ) : (
                      <View style={{marginBottom: 5}} />
                    )}
                  </View>
                  <View>
                    <CustomButtoms
                      text={'Hesap Oluştur'}
                      borderColor={'#5056F1'}
                      borderRadius={5}
                      borderWidth={1}
                      alignItems={'center'}
                      textColor={'#5056F1'}
                      textBoldSize={'600'}
                      justifyContent={'center'}
                      height={height * 0.06}
                    />
                  </View>
                </View>
              </ScrollView>
            )}
          </Formik>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#5056F1'},
  loginArea: {
    marginTop: '20%',
    backgroundColor: 'white',
    marginHorizontal: '5%',
    borderRadius: 15,
  },
});
