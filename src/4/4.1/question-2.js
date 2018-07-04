//

/* eslint-disable no-plusplus, no-bitwise, no-console, no-restricted-properties */

/*
Imagine that you wanted to find what the highest floor of a 100 story 
building you could drop an egg was, without the egg breaking.

But you only have two eggs.

Write an algorithm to work out which floors you should drop the eggs 
from to find this out in the most efficient way.
*/

/*

If you drop an egg from one storey, the egg will break. It is an egg!
Thus, drop from the first storey, egg breaks, thus highest floor is none.

So let's assume the egg is protected in some way that allows it to fall 
some distance without breaking.

Let's also assume that the protection is somehow sufficient to allow for a fall
from 100 stories and still possibly not break!

Thus, the protection of the egg is unknown and could equally fail on a fall
from any storey.

With these assumptions:

Drop first egg from 100 / 2 = 50th storey.

If the egg breaks,
	then drop the second egg from 50 / 2 = 25th storey.
else
	drop the egg from the 75th storey.

The best that can be done is discover a range of stories from which an egg may not 
break if released.






*/
