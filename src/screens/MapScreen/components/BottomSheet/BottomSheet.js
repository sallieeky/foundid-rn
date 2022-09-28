import React, {useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  PanResponder,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {globalFont} from '../../../../assets/style/globalStyle';
import ListItem from '../ListItem/ListItem';

const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} = Dimensions.get('window');
const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * 0.5;
const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0.12;
const MAX_UPWARD_TRANSLATE_Y =
  BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT;
const MAX_DOWNWARD_TRANSLATE_Y = 0;
const DRAG_THRESHOLD = 50;

const BottomSheet = ({
  filterActive,
  onPressAll,
  onPressHilang,
  onPressDitemukan,
  data,
  showLocation,
}) => {
  const [isDrag, setIsDrag] = useState(false);

  const animatedValue = useRef(new Animated.Value(0)).current;
  const lastGestureDy = useRef(0);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        animatedValue.setOffset(lastGestureDy.current);
      },
      onPanResponderMove: (e, gesture) => {
        setIsDrag(true);
        animatedValue.setValue(gesture.dy);
      },
      onPanResponderRelease: (e, gesture) => {
        setIsDrag(false);
        animatedValue.flattenOffset();
        // lastGestureDy.current += gesture.dy;
        // if (lastGestureDy.current < MAX_UPWARD_TRANSLATE_Y) {
        //   lastGestureDy.current = MAX_UPWARD_TRANSLATE_Y;
        // } else if (lastGestureDy.current > MAX_DOWNWARD_TRANSLATE_Y) {
        //   lastGestureDy.current = MAX_DOWNWARD_TRANSLATE_Y;
        // }

        if (gesture.dy > 0) {
          // dragging down
          if (gesture.dy <= DRAG_THRESHOLD) {
            springAnimation('up');
          } else {
            springAnimation('down');
          }
        } else {
          // dragging up
          if (gesture.dy >= -DRAG_THRESHOLD) {
            springAnimation('down');
          } else {
            springAnimation('up');
          }
        }
      },
    }),
  ).current;

  const springAnimation = direction => {
    lastGestureDy.current =
      direction === 'down' ? MAX_DOWNWARD_TRANSLATE_Y : MAX_UPWARD_TRANSLATE_Y;
    Animated.spring(animatedValue, {
      toValue: lastGestureDy.current,
      useNativeDriver: true,
    }).start();
  };

  const bottomSheetAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          outputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bottomSheet, bottomSheetAnimation]}>
        <View style={styles.dragableArea} {...panResponder.panHandlers}>
          <View
            style={{
              ...styles.dragHandle,
              backgroundColor: isDrag ? '#7BC8FA' : '#C8D1E1',
            }}
          />
        </View>
        {/* CONTENT FILTER */}
        <View style={styles.filterContainer}>
          <Pressable onPress={() => onPressAll()}>
            <IonIcons
              name={filterActive ? 'grid-outline' : 'grid'}
              size={32}
              color={'#1262A5'}
            />
          </Pressable>
          <Pressable onPress={() => onPressHilang()}>
            <View
              style={{
                ...styles.filter,
                backgroundColor:
                  filterActive === 'hilang' ? '#1262A5' : '#F9F9F9',
              }}>
              <Text
                style={{
                  ...styles.filterText,
                  color: filterActive === 'hilang' ? '#FFFFFF' : '#242424',
                }}>
                BARANG HILANG
              </Text>
            </View>
          </Pressable>
          <Pressable onPress={() => onPressDitemukan()}>
            <View
              style={{
                ...styles.filter,
                backgroundColor:
                  filterActive === 'ditemukan' ? '#1262A5' : '#F9F9F9',
              }}>
              <Text
                style={{
                  ...styles.filterText,
                  color: filterActive === 'ditemukan' ? '#FFFFFF' : '#242424',
                }}>
                BARANG DITEMUKAN
              </Text>
            </View>
          </Pressable>
        </View>

        {/* LIST ITEM */}
        <View style={styles.listContainer}>
          <ListItem data={data} showLocation={showLocation} />
        </View>
      </Animated.View>
    </View>
  );
};

export default BottomSheet;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  bottomSheet: {
    position: 'absolute',
    width: '100%',
    height: BOTTOM_SHEET_MAX_HEIGHT,
    bottom: BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT,
    ...Platform.select({
      android: {elevation: 8},
    }),
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  dragableArea: {
    width: '100%',
    height: BOTTOM_SHEET_MIN_HEIGHT,
    alignItems: 'center',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    position: 'absolute',
  },
  dragHandle: {
    width: 100,
    height: 6,
    backgroundColor: '#C8D1E1',
    borderRadius: 10,
    marginTop: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 40,
  },
  filter: {
    borderWidth: 1,
    borderColor: '#1262A5',
    paddingVertical: 4,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  filterText: {
    ...globalFont.normal,
    fontSize: 12,
  },
  listContainer: {
    position: 'absolute',
    top: BOTTOM_SHEET_MIN_HEIGHT,
    paddingHorizontal: 8,
    width: '100%',
  },
});
