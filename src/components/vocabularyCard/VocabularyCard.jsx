import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const pronounceWord = (word) => {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'ja-JP';
  window.speechSynthesis.speak(utterance);
};

const VocabularyCard = ({ vocabulary }) => {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="cursor-pointer text-3xl text-center">
          <span
            className="cursor-pointer"
            onClick={() => pronounceWord(vocabulary?.word)}
          >
            {vocabulary?.word}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold">Pronunciation:</h3>
          <p
            onClick={() => pronounceWord(vocabulary?.pronunciation)}
            className="text-lg cursor-pointer"
          >
            {vocabulary?.pronunciation}
          </p>
        </div>
        <div>
          <h3 className="font-semibold">When to Say:</h3>
          <p className="text-lg">{vocabulary?.whenToSay}</p>
        </div>
        {vocabulary?.additionalInfo && (
          <div>
            <h3 className="font-semibold">Additional Information:</h3>
            <p className="text-lg">{vocabulary?.additionalInfo}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
export default VocabularyCard;
