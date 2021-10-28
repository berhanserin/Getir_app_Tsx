import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import CustomButtoms from 'commons/CustomButtoms';
import Textinput from 'commons/Textinput';
import * as yup from 'yup';
import {Formik} from 'formik';

interface LoginPageProps {}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const LoginPage = (props: LoginPageProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.loginArea, {height: height * 0.52}]}>
        <Formik
          validationSchema={yup.object().shape({
            uname: yup
              .string()
              .min(5, ({min}) => `Minimum ${min} Harf Giriniz.`)
              .required('Kullanıcı Adı Zorunlu'),
            password: yup
              .string()
              .min(5, ({min}) => `Minimim ${min} Harf Giriniz.`)
              .required('Şifre Zorunlu'),
          })}
          initialValues={{
            uname: '',
            password: '',
          }}
          onSubmit={async (values, {resetForm}) => {}}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            resetForm,
            isValid,
          }) => (
            <View style={{marginHorizontal: 10, marginTop: 30, flex: 1}}>
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
                  {errors.uname && (
                    <View style={{alignItems: 'center'}}>
                      <Text style={{color: 'red'}}>{errors.uname}</Text>
                    </View>
                  )}
                </View>
                <View style={{marginTop: 15}}>
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
                  {errors.password && (
                    <View style={{alignItems: 'center'}}>
                      <Text style={{color: 'red'}}>{errors.password}</Text>
                    </View>
                  )}
                </View>
                <View style={{alignItems: 'flex-end'}}>
                  <TouchableOpacity>
                    <Text style={{fontWeight: '700', color: '#5056F1'}}>
                      Şifremi Unuttum
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{marginTop: 10}}>
                  <CustomButtoms
                    text={'Giriş Yap'}
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
                <View
                  style={{
                    position: 'absolute',
                    bottom: 6,
                    width: width * 0.85,
                  }}>
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
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#5056F1'},
  loginArea: {
    marginTop: '30%',
    backgroundColor: 'white',
    marginHorizontal: '5%',
    borderRadius: 15,
  },
});
