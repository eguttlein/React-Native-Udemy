import {Image, StyleSheet, Text, View} from 'react-native';

export default function Profile({route}) {
  const {
    user: {item},
  } = route.params;
  const {name, username, email, phone, website} = item;
  return (
    <View style={styles.cardContainer}>
      <View style={styles.profileImageContainer}>
        <Image
          style={styles.profileImage}
          source={require('../../assets/fondo.png')}
          alt="profile"
        />
      </View>
      <View style={styles.personalInfo}>
        <Text style={styles.cardItem}>
          {name}({username})
        </Text>
      </View>
      <Text style={styles.informationLabel}>About {name}:</Text>
      <View style={styles.aboutPersonalInfo}>
        <Text style={styles.cardItem}>Email:</Text>
        <Text>{email}</Text>
      </View>
      <View style={styles.aboutPersonalInfo}>
        <Text style={styles.cardItem}>Phone:</Text>
        <Text>{phone}</Text>
      </View>
      <View style={styles.aboutPersonalInfo}>
        <Text style={styles.cardItem}>Website:</Text>
        <Text>{website}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 20,
    backgroundColor: '#cfcfc6',
    opacity: 0.8,
    borderRadius: 20,
    margin: 15,
    borderColor: 'black',
    borderWidth: 2,
  },
  personalInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  aboutPersonalInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardItem: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
  informationLabel: {
    marginVertical: 20,
    color: '#154c79',
    fontSize: 25,
    fontWeight: 'bold',
  },
  profileImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    height: 150,
    borderRadius: 75,
    width: 150,
  },
});
