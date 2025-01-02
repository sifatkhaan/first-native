import { View } from 'react-native';
import { Image, type ImageSource } from 'expo-image';
 type Props = {
    imageSize: number;
    stickerSourece: ImageSource;
 }

 export default function EmojiSticker({imageSize, stickerSourece}: Props) {
     return (
         <View>
             <Image source={stickerSourece} style={{width: imageSize, height: imageSize}} />
         </View>
     )
 }