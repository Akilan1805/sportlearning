// Sports Data - Tutorials, Quizzes, and Historical Facts

const sportsData = {
    tennis: {
        name: 'Tennis',
        icon: '🎾',
        color: '#4CAF50',
        description: 'Learn to play tennis step by step!',
        steps: [
            { step: 1, title: 'Hold the Racket', content: 'Hold the tennis racket like shaking hands with it. Keep a firm but relaxed grip.', tip: 'Imagine you are holding a bird - not too tight, not too loose!' },
            { step: 2, title: 'Ready Position', content: 'Stand with feet shoulder-width apart, knees slightly bent, and racket in front of you.', tip: 'Stay on your toes to be ready to move quickly!' },
            { step: 3, title: 'Watch the Ball', content: 'Keep your eyes on the ball at all times. Watch it come towards you.', tip: 'Say "bounce" when it bounces and "hit" when you hit it!' },
            { step: 4, title: 'Swing Forward', content: 'Swing your racket forward to hit the ball. Follow through after hitting.', tip: 'Pretend you are painting a rainbow with your racket!' },
            { step: 5, title: 'Practice Bouncing', content: 'Bounce the ball on your racket to get comfortable with it.', tip: 'Try counting how many bounces you can do!' }
        ]
    },
    football: {
        name: 'Football',
        icon: '⚽',
        color: '#2196F3',
        description: 'Master the beautiful game of football!',
        steps: [
            { step: 1, title: 'Learn to Dribble', content: 'Gently tap the ball with the inside of your foot while walking. Keep the ball close.', tip: 'Use small taps, not big kicks!' },
            { step: 2, title: 'Passing the Ball', content: 'Use the inside of your foot to pass. Point your standing foot at your target.', tip: 'Lock your ankle and follow through towards your friend!' },
            { step: 3, title: 'Stopping the Ball', content: 'Use the sole of your foot to stop the ball gently.', tip: 'Be soft like a cushion when the ball comes!' },
            { step: 4, title: 'Shooting Practice', content: 'Strike the ball with your laces for power shots. Keep your body over the ball.', tip: 'Follow through and point your toe where you want the ball to go!' },
            { step: 5, title: 'Team Play', content: 'Learn to work with teammates. Pass and move to open spaces.', tip: 'Communication is key - call for the ball!' }
        ]
    },
    cricket: {
        name: 'Cricket',
        icon: '🏏',
        color: '#FF9800',
        description: 'Learn the gentleman\'s game of cricket!',
        steps: [
            { step: 1, title: 'Hold the Bat', content: 'Put your hands together on the bat handle. Keep a V-shape with your thumbs.', tip: 'Grip it firmly but your hands should touch each other!' },
            { step: 2, title: 'Batting Stance', content: 'Stand sideways to the bowler. Bend your knees slightly and keep eyes on the ball.', tip: 'Keep your head still and watch the ball closely!' },
            { step: 3, title: 'Forward Defense', content: 'Step forward with your front foot to block the ball gently.', tip: 'Keep your bat close to your front pad!' },
            { step: 4, title: 'Basic Bowling', content: 'Run up smoothly and release the ball with a straight arm.', tip: 'Aim for the stumps and follow through!' },
            { step: 5, title: 'Catching Practice', content: 'Keep your eyes on the ball and catch with soft hands.', tip: 'Make a cup shape with your hands!' }
        ]
    },
    basketball: {
        name: 'Basketball',
        icon: '🏀',
        color: '#E91E63',
        description: 'Shoot hoops like a pro!',
        steps: [
            { step: 1, title: 'Dribbling Basics', content: 'Bounce the ball with your fingertips, not your palm. Keep your head up.', tip: 'Push the ball down, don\'t slap it!' },
            { step: 2, title: 'Passing the Ball', content: 'Use a chest pass for nearby teammates. Push with both hands from your chest.', tip: 'Step forward as you pass for more power!' },
            { step: 3, title: 'Shooting Form', content: 'Hold the ball with your shooting hand under it. Use your other hand to guide.', tip: 'BEEF: Balance, Eyes, Elbow, Follow-through!' },
            { step: 4, title: 'Layups', content: 'Approach the basket, take two steps, and softly lay the ball off the backboard.', tip: 'Right hand = right foot, Left hand = left foot!' },
            { step: 5, title: 'Defense Basics', content: 'Stay low, keep your arms wide, and move your feet to stay in front.', tip: 'Watch the other player\'s belly - it doesn\'t lie!' }
        ]
    },
    swimming: {
        name: 'Swimming',
        icon: '🏊',
        color: '#00BCD4',
        description: 'Learn to swim safely and confidently!',
        steps: [
            { step: 1, title: 'Get Comfortable', content: 'Start by putting your face in the water and blowing bubbles.', tip: 'Practice in shallow water with an adult nearby!' },
            { step: 2, title: 'Floating', content: 'Lie on your back, spread your arms, and relax. Let the water hold you up.', tip: 'Keep your tummy up like a starfish!' },
            { step: 3, title: 'Kicking', content: 'Hold the pool edge and kick your legs straight, making small splashes.', tip: 'Keep your legs mostly underwater!' },
            { step: 4, title: 'Arm Movements', content: 'Reach forward, pull through the water, and push past your hip.', tip: 'Imagine scooping ice cream with each stroke!' },
            { step: 5, title: 'Breathing', content: 'Turn your head to the side to breathe. Blow out in the water, breathe in out of water.', tip: 'Exhale underwater through your nose!' }
        ]
    },
    badminton: {
        name: 'Badminton',
        icon: '🏸',
        color: '#9C27B0',
        description: 'Master the shuttlecock sport!',
        steps: [
            { step: 1, title: 'Hold the Racket', content: 'Hold it like shaking hands. Keep a relaxed grip.', tip: 'The V of your thumb and finger should be on top!' },
            { step: 2, title: 'Ready Position', content: 'Stand with feet apart, racket up, knees bent, ready to move.', tip: 'Stay on the balls of your feet!' },
            { step: 3, title: 'Serve Underhand', content: 'Hold the shuttle by the feathers, swing the racket underhand to hit.', tip: 'Drop and hit in one smooth motion!' },
            { step: 4, title: 'Forehand Shot', content: 'Swing from behind your body, hit at the highest point, follow through.', tip: 'Turn your body and use your whole arm!' },
            { step: 5, title: 'Movement', content: 'Use small quick steps to move around the court. Return to center after each shot.', tip: 'Always go back to the middle!' }
        ]
    },
    tabletennis: {
        name: 'Table Tennis',
        icon: '🏓',
        color: '#F44336',
        description: 'Become a ping pong champion!',
        steps: [
            { step: 1, title: 'Grip the Paddle', content: 'Hold like shaking hands. Keep your index finger on the back of the paddle.', tip: 'Relax your grip - tight grips slow you down!' },
            { step: 2, title: 'Ready Stance', content: 'Stand close to the table, feet shoulder-width apart, knees bent.', tip: 'Keep your paddle in front of your belly button!' },
            { step: 3, title: 'Forehand Push', content: 'Step forward slightly, push the ball gently over the net.', tip: 'Brush the ball forward and down slightly!' },
            { step: 4, title: 'Backhand Push', content: 'Use the other side of your paddle. Keep your elbow close to your body.', tip: 'Small movements are better than big swings!' },
            { step: 5, title: 'Serving', content: 'Toss the ball up, let it bounce on your side first, then hit over.', tip: 'Start with simple serves and add spin later!' }
        ]
    },
    running: {
        name: 'Running',
        icon: '🏃',
        color: '#795548',
        description: 'Learn proper running technique!',
        steps: [
            { step: 1, title: 'Warm Up First', content: 'Always start with walking and gentle stretches before running.', tip: 'March on the spot to get your muscles ready!' },
            { step: 2, title: 'Proper Posture', content: 'Stand tall, look forward, keep your shoulders relaxed.', tip: 'Imagine a string pulling you up from your head!' },
            { step: 3, title: 'Arm Movement', content: 'Bend your elbows at 90 degrees. Swing arms forward and back, not across.', tip: 'Pretend you\'re holding potato chips - don\'t crush them!' },
            { step: 4, title: 'Foot Landing', content: 'Land softly on the middle of your foot, not your heel.', tip: 'Run like you\'re sneaking up on someone!' },
            { step: 5, title: 'Breathing', content: 'Breathe in through your nose, out through your mouth. Stay relaxed.', tip: 'If you can talk while running, your pace is good!' }
        ]
    },
    cycling: {
        name: 'Cycling',
        icon: '🚴',
        color: '#607D8B',
        description: 'Learn to ride a bike safely!',
        steps: [
            { step: 1, title: 'Safety First', content: 'Always wear a helmet. Check it fits snugly on your head.', tip: 'The helmet should sit flat on top of your head!' },
            { step: 2, title: 'Balance Practice', content: 'Start by walking with the bike, then try gliding with feet up.', tip: 'Look ahead, not at your feet!' },
            { step: 3, title: 'Start Pedaling', content: 'Put one foot on the pedal, push off, then add the other foot.', tip: 'Start with the pedal at 2 o\'clock position!' },
            { step: 4, title: 'Braking', content: 'Use both brakes gently. Start slowing down before you need to stop.', tip: 'Squeeze, don\'t grab the brakes!' },
            { step: 5, title: 'Turning', content: 'Look where you want to go, lean slightly, and keep pedaling smoothly.', tip: 'Your bike goes where you look!' }
        ]
    },
    yoga: {
        name: 'Yoga & Stretching',
        icon: '🧘',
        color: '#8BC34A',
        description: 'Stretch and relax your body!',
        steps: [
            { step: 1, title: 'Deep Breathing', content: 'Sit comfortably, close your eyes, breathe in slowly through your nose.', tip: 'Count to 4 breathing in, count to 4 breathing out!' },
            { step: 2, title: 'Cat-Cow Stretch', content: 'On hands and knees, arch your back up like a cat, then drop it down.', tip: 'Move slowly and breathe with each movement!' },
            { step: 3, title: 'Tree Pose', content: 'Stand on one leg, put the other foot on your calf, arms up like branches.', tip: 'Focus on one spot to help you balance!' },
            { step: 4, title: 'Child\'s Pose', content: 'Kneel down, sit back on your heels, reach arms forward on the ground.', tip: 'This is a great resting pose!' },
            { step: 5, title: 'Relaxation', content: 'Lie flat on your back, close your eyes, relax every part of your body.', tip: 'Imagine you are melting into the floor!' }
        ]
    }
};

const quizQuestions = {
    tennis: {
        easy: [
            { question: 'What do you hit in tennis?', options: ['A ball', 'A puck', 'A frisbee', 'A shuttlecock'], answer: 0 },
            { question: 'What do you hold in tennis?', options: ['A bat', 'A racket', 'A stick', 'A paddle'], answer: 1 },
            { question: 'How many players are on each side in singles tennis?', options: ['1', '2', '3', '4'], answer: 0 },
            { question: 'What color is a tennis ball usually?', options: ['Red', 'Blue', 'Yellow-Green', 'White'], answer: 2 },
            { question: 'What is the tennis court\'s net for?', options: ['To catch fish', 'To divide the court', 'To protect players', 'For decoration'], answer: 1 }
        ],
        medium: [
            { question: 'What is the first point in tennis called?', options: ['Zero', 'Love', 'One', 'Start'], answer: 1 },
            { question: 'What is hitting the ball before it bounces called?', options: ['Smash', 'Volley', 'Serve', 'Lob'], answer: 1 },
            { question: 'What do you call the person who judges the game?', options: ['Referee', 'Umpire', 'Judge', 'Coach'], answer: 1 },
            { question: 'How many sets do you need to win in most matches?', options: ['1', '2', '3', '4'], answer: 1 },
            { question: 'What is hitting the ball over your head called?', options: ['Overhead', 'Backhand', 'Forehand', 'Drop shot'], answer: 0 }
        ],
        hard: [
            { question: 'What are the four Grand Slam tournaments?', options: ['Wimbledon, US Open, French Open, Australian Open', 'Wimbledon, US Open, Indian Wells, Miami', 'French Open, Italian Open, US Open, Australian Open', 'None of these'], answer: 0 },
            { question: 'What is a score of 40-40 called?', options: ['Deuce', 'Tie', 'Even', 'Draw'], answer: 0 },
            { question: 'Who holds the most Grand Slam titles in men\'s tennis?', options: ['Roger Federer', 'Rafael Nadal', 'Novak Djokovic', 'Pete Sampras'], answer: 2 },
            { question: 'What surface is the French Open played on?', options: ['Grass', 'Hard court', 'Clay', 'Carpet'], answer: 2 },
            { question: 'What is an ace in tennis?', options: ['A serve the opponent cannot touch', 'A perfect game', 'Winning a set', 'A type of grip'], answer: 0 }
        ]
    },
    football: {
        easy: [
            { question: 'What part of your body do you mainly use in football?', options: ['Hands', 'Feet', 'Head only', 'Elbows'], answer: 1 },
            { question: 'What shape is a football?', options: ['Square', 'Round', 'Triangle', 'Oval'], answer: 1 },
            { question: 'How many players are on a football team on the field?', options: ['9', '10', '11', '12'], answer: 2 },
            { question: 'What is the goal used for?', options: ['Scoring points', 'Sitting on', 'Storing balls', 'Blocking sun'], answer: 0 },
            { question: 'Who is the player that guards the goal?', options: ['Striker', 'Defender', 'Goalkeeper', 'Midfielder'], answer: 2 }
        ],
        medium: [
            { question: 'What is it called when the ball goes out of bounds on the side?', options: ['Corner kick', 'Throw-in', 'Free kick', 'Goal kick'], answer: 1 },
            { question: 'What color card means a player must leave the game?', options: ['Yellow', 'Green', 'Red', 'Blue'], answer: 2 },
            { question: 'How long is a regular football match?', options: ['60 minutes', '90 minutes', '45 minutes', '120 minutes'], answer: 1 },
            { question: 'What is it called when a player scores three goals?', options: ['Triple', 'Hat-trick', 'Threesome', 'Trio'], answer: 1 },
            { question: 'What position plays in the middle of the field?', options: ['Goalkeeper', 'Defender', 'Midfielder', 'Striker'], answer: 2 }
        ],
        hard: [
            { question: 'Which country won the first FIFA World Cup in 1930?', options: ['Brazil', 'Argentina', 'Uruguay', 'Germany'], answer: 2 },
            { question: 'What is the offside rule?', options: ['Can\'t be behind all defenders when ball is passed', 'Can\'t touch the ball with hands', 'Must stay in your half', 'Can\'t tackle from behind'], answer: 0 },
            { question: 'Which player has won the most Ballon d\'Or awards?', options: ['Cristiano Ronaldo', 'Lionel Messi', 'Pele', 'Diego Maradona'], answer: 1 },
            { question: 'What is VAR in football?', options: ['Video Assistant Referee', 'Very Active Referee', 'Visual Aid Review', 'Verified Action Replay'], answer: 0 },
            { question: 'Which club has won the most UEFA Champions League titles?', options: ['Barcelona', 'AC Milan', 'Real Madrid', 'Bayern Munich'], answer: 2 }
        ]
    },
    cricket: {
        easy: [
            { question: 'What do you hit with in cricket?', options: ['Racket', 'Bat', 'Stick', 'Club'], answer: 1 },
            { question: 'What are the three sticks at each end called?', options: ['Posts', 'Wickets', 'Goals', 'Nets'], answer: 1 },
            { question: 'What do you throw to the batsman?', options: ['Shuttlecock', 'Puck', 'Ball', 'Disc'], answer: 2 },
            { question: 'How many players are on a cricket team?', options: ['9', '10', '11', '12'], answer: 2 },
            { question: 'What protects the batsman\'s legs?', options: ['Gloves', 'Helmet', 'Pads', 'Shoes'], answer: 2 }
        ],
        medium: [
            { question: 'What is it called when all batsmen are out?', options: ['Full out', 'All out', 'Game over', 'Innings end'], answer: 1 },
            { question: 'How many runs for hitting the ball over the boundary without bouncing?', options: ['4', '5', '6', '10'], answer: 2 },
            { question: 'What is the bowler trying to hit?', options: ['The bat', 'The stumps', 'The pads', 'The ground'], answer: 1 },
            { question: 'What does LBW stand for?', options: ['Leg Before Wicket', 'Long Ball Win', 'Left Bat Wing', 'Leg Bat Wicket'], answer: 0 },
            { question: 'How many balls are in an over?', options: ['4', '5', '6', '8'], answer: 2 }
        ],
        hard: [
            { question: 'What is a yorker?', options: ['A ball aimed at the batsman\'s feet', 'A type of catch', 'A fielding position', 'A type of bat'], answer: 0 },
            { question: 'Who holds the record for most Test runs?', options: ['Virat Kohli', 'Sachin Tendulkar', 'Ricky Ponting', 'Brian Lara'], answer: 1 },
            { question: 'What is a googly?', options: ['A spin ball that turns unexpectedly', 'A fast ball', 'A type of catch', 'A fielding position'], answer: 0 },
            { question: 'Which country invented cricket?', options: ['India', 'Australia', 'England', 'South Africa'], answer: 2 },
            { question: 'What is the Duckworth-Lewis method used for?', options: ['Calculating scores in rain-affected matches', 'Training players', 'Selecting teams', 'Measuring speed'], answer: 0 }
        ]
    },
    basketball: {
        easy: [
            { question: 'What do you try to throw the ball through?', options: ['Net', 'Goal', 'Hoop', 'Ring'], answer: 2 },
            { question: 'How do you move with the ball?', options: ['Running', 'Dribbling', 'Walking', 'Sliding'], answer: 1 },
            { question: 'How many players from each team play on the court?', options: ['4', '5', '6', '7'], answer: 1 },
            { question: 'What is the court floor usually made of?', options: ['Grass', 'Sand', 'Wood', 'Concrete'], answer: 2 },
            { question: 'What color is a basketball usually?', options: ['White', 'Black', 'Orange', 'Brown'], answer: 2 }
        ],
        medium: [
            { question: 'How many points is a shot from beyond the arc worth?', options: ['1', '2', '3', '4'], answer: 2 },
            { question: 'What is it called when you score without dribbling after catching?', options: ['Slam dunk', 'Layup', 'Free throw', 'Alley-oop'], answer: 1 },
            { question: 'How long is each quarter in the NBA?', options: ['10 minutes', '12 minutes', '15 minutes', '20 minutes'], answer: 1 },
            { question: 'What happens when you walk with the ball without dribbling?', options: ['Free throw', 'Traveling violation', 'Foul', 'Nothing'], answer: 1 },
            { question: 'What is a double-double?', options: ['Scoring twice', 'Double digits in two categories', 'Two players scoring', 'Two free throws'], answer: 1 }
        ],
        hard: [
            { question: 'Who is considered the greatest basketball player ever (GOAT)?', options: ['LeBron James', 'Michael Jordan', 'Kobe Bryant', 'Magic Johnson'], answer: 1 },
            { question: 'What is a triple-double?', options: ['30 points', 'Double digits in three categories', 'Three players scoring', 'Three quarters played'], answer: 1 },
            { question: 'Which team has won the most NBA championships?', options: ['Chicago Bulls', 'LA Lakers', 'Boston Celtics', 'Golden State Warriors'], answer: 2 },
            { question: 'What is the shot clock time in the NBA?', options: ['20 seconds', '24 seconds', '30 seconds', '35 seconds'], answer: 1 },
            { question: 'What year was basketball invented?', options: ['1891', '1900', '1920', '1950'], answer: 0 }
        ]
    },
    swimming: {
        easy: [
            { question: 'Where do you swim?', options: ['Field', 'Pool', 'Court', 'Track'], answer: 1 },
            { question: 'What helps you see underwater?', options: ['Glasses', 'Goggles', 'Sunglasses', 'Contact lenses'], answer: 1 },
            { question: 'What do swimmers wear on their head?', options: ['Hat', 'Cap', 'Helmet', 'Bandana'], answer: 1 },
            { question: 'What do you do with your arms in swimming?', options: ['Wave', 'Stroke', 'Punch', 'Clap'], answer: 1 },
            { question: 'Why do we float in water?', options: ['Because of air in lungs', 'Because water is heavy', 'Magic', 'Because we\'re light'], answer: 0 }
        ],
        medium: [
            { question: 'What stroke do you swim on your back?', options: ['Freestyle', 'Breaststroke', 'Backstroke', 'Butterfly'], answer: 2 },
            { question: 'Which stroke is the fastest?', options: ['Butterfly', 'Freestyle', 'Breaststroke', 'Backstroke'], answer: 1 },
            { question: 'What is the hardest stroke to learn?', options: ['Freestyle', 'Backstroke', 'Butterfly', 'Breaststroke'], answer: 2 },
            { question: 'How long is an Olympic swimming pool?', options: ['25 meters', '50 meters', '100 meters', '200 meters'], answer: 1 },
            { question: 'What does a lifeguard do?', options: ['Swims races', 'Teaches lessons', 'Keeps swimmers safe', 'Cleans the pool'], answer: 2 }
        ],
        hard: [
            { question: 'Who is the most decorated Olympian of all time?', options: ['Usain Bolt', 'Michael Phelps', 'Simone Biles', 'Katie Ledecky'], answer: 1 },
            { question: 'What is an Individual Medley (IM)?', options: ['One stroke only', 'All four strokes', 'Team event', 'Relay race'], answer: 1 },
            { question: 'What is the order of strokes in an IM?', options: ['Free, Back, Breast, Fly', 'Fly, Back, Breast, Free', 'Back, Fly, Free, Breast', 'Breast, Fly, Back, Free'], answer: 1 },
            { question: 'How many Olympic medals did Michael Phelps win?', options: ['18', '23', '28', '32'], answer: 2 },
            { question: 'What is a flip turn?', options: ['A type of diving', 'Turning at the wall underwater', 'A swimming stroke', 'A pool cleaning method'], answer: 1 }
        ]
    },
    badminton: {
        easy: [
            { question: 'What do you hit in badminton?', options: ['Ball', 'Puck', 'Shuttlecock', 'Disc'], answer: 2 },
            { question: 'What do you hold in badminton?', options: ['Bat', 'Racket', 'Paddle', 'Stick'], answer: 1 },
            { question: 'What is in the middle of the court?', options: ['Wall', 'Net', 'Line', 'Pole'], answer: 1 },
            { question: 'How many feathers on a shuttlecock?', options: ['12', '14', '16', '18'], answer: 2 },
            { question: 'Can the shuttlecock touch the ground?', options: ['Yes', 'No - it ends the point', 'Sometimes', 'Only on serve'], answer: 1 }
        ],
        medium: [
            { question: 'How many points do you need to win a game?', options: ['11', '15', '21', '25'], answer: 2 },
            { question: 'What is a smash?', options: ['A gentle hit', 'A powerful downward shot', 'A serve', 'A block'], answer: 1 },
            { question: 'Where must the serve land?', options: ['Anywhere', 'Diagonally opposite court', 'Same side', 'Over the net only'], answer: 1 },
            { question: 'What is a clear in badminton?', options: ['A shot to the back of the court', 'A low shot', 'A serve', 'Missing the shuttle'], answer: 0 },
            { question: 'What hand do most players use?', options: ['Right only', 'Left only', 'Their dominant hand', 'Both'], answer: 2 }
        ],
        hard: [
            { question: 'Which country dominates international badminton?', options: ['USA', 'India', 'China', 'Japan'], answer: 2 },
            { question: 'What is a drive in badminton?', options: ['Fast flat shot', 'High shot', 'Drop shot', 'Serve'], answer: 0 },
            { question: 'How many games make a match?', options: ['1', '2', '3', '5'], answer: 2 },
            { question: 'What happens at 29-29?', options: ['Sudden death', 'Next point wins', 'Restart game', 'Continue to 30'], answer: 1 },
            { question: 'What is a net kill?', options: ['Hitting into the net', 'Sharp downward shot at the net', 'A foul', 'Touching the net'], answer: 1 }
        ]
    },
    tabletennis: {
        easy: [
            { question: 'What is another name for table tennis?', options: ['Pong', 'Ping Pong', 'Net ball', 'Mini tennis'], answer: 1 },
            { question: 'What is the bat covered with?', options: ['Leather', 'Rubber', 'Plastic', 'Wood only'], answer: 1 },
            { question: 'What color can the ball be?', options: ['Only white', 'Only orange', 'White or orange', 'Any color'], answer: 2 },
            { question: 'Where do you play table tennis?', options: ['On a field', 'On a table', 'In a pool', 'On grass'], answer: 1 },
            { question: 'How many players in singles?', options: ['1 vs 1', '2 vs 2', '3 vs 3', '4 vs 4'], answer: 0 }
        ],
        medium: [
            { question: 'How many points to win a game?', options: ['11', '15', '21', '25'], answer: 0 },
            { question: 'How many serves does each player get?', options: ['1', '2', '3', '5'], answer: 1 },
            { question: 'What must happen first on a serve?', options: ['Ball must bounce on your side first', 'Hit net', 'Spin the ball', 'Hit hard'], answer: 0 },
            { question: 'What is topspin?', options: ['Ball spins forward', 'Ball spins backward', 'Ball goes sideways', 'No spin'], answer: 0 },
            { question: 'What is a let?', options: ['A foul', 'Serve that hits net and goes over', 'A point', 'Missing the ball'], answer: 1 }
        ],
        hard: [
            { question: 'Which country has won the most Olympic gold in table tennis?', options: ['Japan', 'Germany', 'China', 'South Korea'], answer: 2 },
            { question: 'How thick can rubber on paddle be?', options: ['2mm', '3mm', '4mm', '5mm'], answer: 2 },
            { question: 'What is a push stroke?', options: ['Defensive backspin shot', 'Attacking shot', 'Serve only', 'Side spin shot'], answer: 0 },
            { question: 'What happens at 10-10?', options: ['Game over', 'Deuce - win by 2', 'Replay game', 'First to 11 wins'], answer: 1 },
            { question: 'What is a penhold grip?', options: ['Hold paddle like a pen', 'Hold with fist', 'Two handed grip', 'Thumb grip'], answer: 0 }
        ]
    },
    running: {
        easy: [
            { question: 'What do you wear on your feet when running?', options: ['Sandals', 'Running shoes', 'Boots', 'Slippers'], answer: 1 },
            { question: 'What should you do before running?', options: ['Eat a big meal', 'Warm up', 'Sleep', 'Watch TV'], answer: 1 },
            { question: 'Where can you run?', options: ['Only on a track', 'Only inside', 'Almost anywhere safe', 'Only on grass'], answer: 2 },
            { question: 'Is running good for your health?', options: ['Yes', 'No', 'Only sometimes', 'Never'], answer: 0 },
            { question: 'What do you drink after running?', options: ['Soda', 'Water', 'Coffee', 'Milkshake'], answer: 1 }
        ],
        medium: [
            { question: 'What is a marathon distance?', options: ['10 km', '21 km', '42 km', '100 km'], answer: 2 },
            { question: 'What is a sprint?', options: ['Long slow run', 'Short fast run', 'Medium run', 'Walking'], answer: 1 },
            { question: 'What should your breathing be like?', options: ['Hold your breath', 'Steady and rhythmic', 'Very fast', 'Very slow'], answer: 1 },
            { question: 'What is interval training?', options: ['Running at same speed', 'Alternating fast and slow', 'Only walking', 'Only sprinting'], answer: 1 },
            { question: 'What does stretching after running help prevent?', options: ['Hunger', 'Muscle soreness', 'Thirst', 'Boredom'], answer: 1 }
        ],
        hard: [
            { question: 'Who is the fastest man ever?', options: ['Carl Lewis', 'Usain Bolt', 'Justin Gatlin', 'Tyson Gay'], answer: 1 },
            { question: 'What is Usain Bolt\'s 100m world record?', options: ['9.58 seconds', '9.68 seconds', '9.78 seconds', '9.88 seconds'], answer: 0 },
            { question: 'What is a negative split?', options: ['Running second half faster', 'Running slower', 'Taking breaks', 'Running backwards'], answer: 0 },
            { question: 'What country dominates long distance running?', options: ['USA', 'Jamaica', 'Kenya', 'China'], answer: 2 },
            { question: 'What is VO2 max?', options: ['Speed record', 'Maximum oxygen uptake', 'Heart rate', 'Lung capacity'], answer: 1 }
        ]
    },
    cycling: {
        easy: [
            { question: 'What must you always wear when cycling?', options: ['Sunglasses', 'Helmet', 'Gloves', 'Cape'], answer: 1 },
            { question: 'How many wheels does a bicycle have?', options: ['1', '2', '3', '4'], answer: 1 },
            { question: 'What makes the bicycle move forward?', options: ['Engine', 'Pedaling', 'Wind', 'Magic'], answer: 1 },
            { question: 'What do you use to stop?', options: ['Your feet', 'Brakes', 'Voice', 'Hands'], answer: 1 },
            { question: 'What side of the road should you cycle on?', options: ['The left', 'The middle', 'Same as cars in your country', 'Anywhere'], answer: 2 }
        ],
        medium: [
            { question: 'What do gears on a bike help with?', options: ['Looking cool', 'Going up hills easier', 'Making noise', 'Stopping faster'], answer: 1 },
            { question: 'What should you check before riding?', options: ['Weather only', 'Tires, brakes, and chain', 'Nothing', 'Color of bike'], answer: 1 },
            { question: 'What is drafting in cycling?', options: ['Drawing pictures', 'Riding behind someone to save energy', 'Going very fast', 'Racing alone'], answer: 1 },
            { question: 'What hand signal shows you\'re turning left?', options: ['Right arm out', 'Left arm out straight', 'Both arms up', 'Wave'], answer: 1 },
            { question: 'Why should you look behind before turning?', options: ['To see the view', 'To check for traffic', 'For fun', 'To slow down'], answer: 1 }
        ],
        hard: [
            { question: 'What is the Tour de France?', options: ['A cooking show', 'Famous cycling race', 'A museum', 'A French holiday'], answer: 1 },
            { question: 'How long is the Tour de France approximately?', options: ['100 km', '1000 km', '2000 km', '3500 km'], answer: 3 },
            { question: 'What is cadence in cycling?', options: ['Speed', 'Pedaling rate (RPM)', 'Distance', 'Height'], answer: 1 },
            { question: 'What is a peloton?', options: ['A type of bike', 'Main group of riders', 'A helmet', 'Racing tires'], answer: 1 },
            { question: 'Who has won the most Tour de France titles?', options: ['Lance Armstrong', 'Chris Froome', 'Eddy Merckx', 'Jonas Vingegaard'], answer: 2 }
        ]
    },
    yoga: {
        easy: [
            { question: 'What do you use for yoga on the floor?', options: ['Blanket', 'Yoga mat', 'Towel', 'Carpet'], answer: 1 },
            { question: 'What is important in yoga?', options: ['Running fast', 'Breathing', 'Shouting', 'Jumping'], answer: 1 },
            { question: 'Should you force your body in yoga?', options: ['Yes, push hard', 'No, be gentle', 'Sometimes', 'Always'], answer: 1 },
            { question: 'What animal pose involves being on hands and knees?', options: ['Dog', 'Cat', 'Bird', 'Fish'], answer: 1 },
            { question: 'Where is yoga from originally?', options: ['China', 'Japan', 'India', 'Egypt'], answer: 2 }
        ],
        medium: [
            { question: 'What does "Namaste" mean?', options: ['Hello', 'Goodbye', 'I bow to you', 'Thank you'], answer: 2 },
            { question: 'What is Downward Dog?', options: ['A pet', 'A yoga pose', 'A breathing technique', 'A meditation'], answer: 1 },
            { question: 'What is Savasana?', options: ['Standing pose', 'Corpse pose (lying flat)', 'Sitting pose', 'Balance pose'], answer: 1 },
            { question: 'What does yoga help improve?', options: ['Only strength', 'Only flexibility', 'Flexibility, strength, and calm', 'Only balance'], answer: 2 },
            { question: 'What is a Sun Salutation?', options: ['Greeting the sun', 'A series of connected poses', 'Morning exercise only', 'A yoga mat'], answer: 1 }
        ],
        hard: [
            { question: 'What is pranayama?', options: ['A pose', 'Breathing exercises', 'Meditation only', 'A type of yoga'], answer: 1 },
            { question: 'What is the Warrior pose called in Sanskrit?', options: ['Virabhadrasana', 'Tadasana', 'Uttanasana', 'Savasana'], answer: 0 },
            { question: 'What is the Mountain pose called?', options: ['Vrksasana', 'Tadasana', 'Trikonasana', 'Balasana'], answer: 1 },
            { question: 'What are the eight limbs of yoga?', options: ['Types of poses', 'Complete yoga philosophy', 'Breathing techniques', 'Levels of difficulty'], answer: 1 },
            { question: 'What is a chakra?', options: ['A yoga pose', 'Energy center in the body', 'A type of breathing', 'A meditation technique'], answer: 1 }
        ]
    }
};

const historicalFacts = {
    tennis: {
        '1-13': '🎾 On January 13, 2019, Naomi Osaka won her first Australian Open! She became the first Japanese player to win a Grand Slam singles title.',
        '1-14': '🎾 January 14, 2007 - Roger Federer started his record 160th consecutive week as World No. 1!',
        '1-15': '🎾 The Australian Open, one of four Grand Slams, is held every January in Melbourne!',
        '6-3': '🎾 Rafael Nadal has won the French Open a record 14 times - more than any other player at any Grand Slam!',
        '7-14': '🎾 Wimbledon, the oldest tennis tournament, has been played since 1877!',
        '9-8': '🎾 The US Open uses yellow tennis balls that are specially designed to be visible on TV!'
    },
    football: {
        '1-13': '⚽ On January 13, 2013, Lionel Messi won his 4th FIFA Ballon d\'Or award! He now has won it a record 8 times!',
        '1-14': '⚽ January 14 - Cristiano Ronaldo has scored over 900 career goals, one of the highest in history!',
        '7-11': '⚽ On July 11, 2010, Spain won their first FIFA World Cup, defeating Netherlands 1-0!',
        '7-30': '⚽ On July 30, 1966, England won the World Cup at Wembley Stadium!',
        '11-30': '⚽ November 30 is often celebrated as the birthday of modern football rules!',
        '12-25': '⚽ The famous WWI Christmas Truce football match happened on December 25, 1914!'
    },
    cricket: {
        '1-13': '🏏 January 13 - Cricket is the second most popular sport in the world with over 2.5 billion fans!',
        '1-14': '🏏 January 14 - The Ashes series between England and Australia is one of cricket\'s oldest rivalries!',
        '2-24': '🏏 On February 24, 2010, Sachin Tendulkar scored the first-ever double century (200 runs) in ODI cricket!',
        '6-25': '🏏 On June 25, 1983, India won their first Cricket World Cup, defeating West Indies!',
        '4-2': '🏏 On April 2, 2011, India won the Cricket World Cup at home in Mumbai!',
        '3-23': '🏏 March 23, 2003 - Australia completed a perfect World Cup campaign, winning all 11 matches!'
    },
    basketball: {
        '1-13': '🏀 January 13, 1982 - The famous "Jordan shrug" celebration was inspired by Michael Jordan\'s incredible games!',
        '1-14': '🏀 January 14 - NBA courts are exactly 94 feet long and 50 feet wide!',
        '2-17': '🏀 The NBA All-Star Game, featuring the best players, is held every February!',
        '6-11': '🏀 On June 11, 1997, Michael Jordan scored 38 points while sick with the flu - the famous "Flu Game"!',
        '12-21': '🏀 Dr. James Naismith invented basketball on December 21, 1891, using a peach basket!',
        '1-22': '🏀 Kobe Bryant scored 81 points on January 22, 2006 - the second-highest in NBA history!'
    },
    swimming: {
        '1-13': '🏊 January 13 - Swimming is one of the best exercises because it works out your entire body!',
        '1-14': '🏊 January 14 - Michael Phelps started swimming at age 7 and went on to become the greatest Olympian ever!',
        '8-13': '🏊 August 13, 2016 - Michael Phelps won his 23rd Olympic gold medal at Rio Olympics!',
        '8-17': '🏊 August 17 - The butterfly stroke was officially recognized as a separate stroke in 1950!',
        '7-28': '🏊 July 28 - Katie Ledecky holds the world record in 800m and 1500m freestyle!',
        '9-4': '🏊 September 4 - Swimming was added to the first modern Olympics in 1896!'
    },
    badminton: {
        '1-13': '🏸 January 13 - A shuttlecock can travel at speeds over 300 mph when smashed - faster than any other sports ball!',
        '1-14': '🏸 January 14 - Badminton has been an Olympic sport since 1992!',
        '5-21': '🏸 May 21 - The Thomas Cup (men\'s) and Uber Cup (women\'s) are the biggest team events in badminton!',
        '8-5': '🏸 August 5, 2012 - Lin Dan won his second consecutive Olympic gold in singles!',
        '3-11': '🏸 March 11 - The All England Open is the oldest and most prestigious badminton tournament!',
        '7-21': '🏸 July 21 - Badminton originated in India and was called "Poona" before becoming Badminton!'
    },
    tabletennis: {
        '1-13': '🏓 January 13 - Table tennis balls travel at an average speed of 25 mph, with smashes reaching 70 mph!',
        '1-14': '🏓 January 14 - China has dominated table tennis, winning most Olympic gold medals in the sport!',
        '4-6': '🏓 April 6 is celebrated as World Table Tennis Day!',
        '8-8': '🏓 August 8 - Table tennis was first included in the Olympics at Seoul 1988!',
        '10-1': '🏓 October 1 - Table tennis helped improve US-China relations in 1971 through "Ping Pong Diplomacy"!',
        '2-9': '🏓 February 9 - The fastest table tennis shot was recorded at 70 mph!'
    },
    running: {
        '1-13': '🏃 January 13 - Running just 30 minutes a day can improve your health and mood!',
        '1-14': '🏃 January 14 - The human body is naturally designed for long-distance running!',
        '8-16': '🏃 August 16, 2009 - Usain Bolt ran 100m in 9.58 seconds, a world record that still stands!',
        '8-20': '🏃 August 20, 2009 - Usain Bolt ran 200m in 19.19 seconds, another incredible world record!',
        '10-12': '🏃 October 12, 2019 - Eliud Kipchoge became the first person to run a marathon under 2 hours!',
        '4-19': '🏃 April 19 - The Boston Marathon is the oldest annual marathon, first run in 1897!'
    },
    cycling: {
        '1-13': '🚴 January 13 - Bicycles are the most energy-efficient form of transportation!',
        '1-14': '🚴 January 14 - Over 1 billion bicycles are used worldwide - more than double the number of cars!',
        '7-1': '🚴 July 1 - The Tour de France usually starts in July and lasts for 23 days!',
        '7-24': '🚴 July 24 - The Tour de France covers about 3,500 kilometers through mountains and flat roads!',
        '8-7': '🚴 August 7 - Track cycling has been an Olympic sport since the first modern Olympics in 1896!',
        '6-12': '🚴 June 12 - The earliest bicycles from the 1800s had no pedals - riders pushed with their feet!'
    },
    yoga: {
        '1-13': '🧘 January 13 - Yoga is over 5,000 years old, originating in ancient India!',
        '1-14': '🧘 January 14 - Regular yoga practice can improve flexibility, strength, and reduce stress!',
        '6-21': '🧘 June 21 is International Yoga Day, celebrated worldwide since 2015!',
        '9-5': '🧘 September 5 - The word "yoga" comes from Sanskrit and means "to unite" or "to join"!',
        '8-15': '🧘 August 15 - There are many types of yoga including Hatha, Vinyasa, and Kundalini!',
        '3-8': '🧘 March 8 - Yoga has been practiced by astronauts in space to stay flexible!'
    }
};

module.exports = {
    sportsData,
    quizQuestions,
    historicalFacts
};
