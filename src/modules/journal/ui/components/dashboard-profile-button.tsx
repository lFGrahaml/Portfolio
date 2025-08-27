import { CustomAvatar } from '@/components/custom-avatar';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { authClient } from '@/lib/auth-client'
import { ChevronDownIcon, CreditCardIcon, LogOutIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

const DashboardProfileButton = () => {
  const router = useRouter();
  const { data, isPending} = authClient.useSession();

  const onLogout = async() => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
        }
      }
    }

    )
  }

  if ( isPending || !data?.user)
  {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='rounded-lg border border-border/10 p-3 w-dull flex items-center justify-between bg-white/5 hover:bg-white/10 overflow-hidden space-x-2 cursor-pointer'>
        {data.user.image
        ? (
            <Avatar>
              <AvatarImage src={data.user.image}/>
            </Avatar>
          )
        : <CustomAvatar
            seed={data.user.name}
            variant='initials'
            className='size-9 mr-3'
          />}

          <div className='flex flex-col gap-0.5 text-left overflow-hidden flex-1 min-w-0'>
            <p className='text-sm truncate w-full'>
              {data.user.name}
            </p>
            <p className='text-xs truncate w-full'>
              {data.user.email}
            </p>
          </div>
          <ChevronDownIcon className='size-4 shrink-0' />
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end' side='right' className='w-72'>
        <DropdownMenuLabel>
          <div className='flex flex-col gap-1'>
            <span className='font-medium truncate'>{data.user.name}</span>
            <span className='text-sm truncate font-normal text-muted-foreground'>{data.user.email}</span>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem className='cursor-pointer flex items-center justify-between'>
          Billing
          <CreditCardIcon className='size-4' />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={onLogout}
          className='cursor-pointer flex items-center justify-between'
        >
            Log out
          <LogOutIcon className='size-4' />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DashboardProfileButton
