'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { FormContent } from './form-content';
import { FormItem } from './form-item';
import { FormError } from './form-error';
import { FormOutput } from './form-output';
import { FormTitle } from './form-title';
import { schema } from '../schemas/schema';
import { Card } from '@/shared/ui/card';
import { Button } from '@/shared/ui/button';
import { Label } from '@/shared/ui/label';
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';

type FormValues = z.infer<typeof schema>;

export function Form() {
  const [output, setOutput] = useState<string>('');
  const [isPending, setIsPending] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormValues) {
    setIsPending(true);
    fetch('/api/form', { method: 'POST', body: JSON.stringify(data) })
      .then(async (res) => {
        if (res.ok) {
          const data = await res.json();

          if ('message' in data) {
            setOutput(data.message);
          }
        }
      })
      .finally(() => setIsPending(false));
  }

  if (output) {
    return <FormOutput>{output}</FormOutput>;
  }

  return (
    <>
      <FormTitle>Only CTA on the page</FormTitle>
      <Card $width="24rem" $margin="2rem 0 0 0">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormContent>
            <FormItem>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                autoComplete="name"
                placeholder="Value"
                autoCorrect="off"
                disabled={isPending}
                {...register('name')}
              />
              {errors?.name && <FormError>{errors.name.message}</FormError>}
            </FormItem>
            <FormItem>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="Email"
                autoCorrect="off"
                disabled={isPending}
                {...register('email')}
              />
              {errors?.email && <FormError>{errors.email.message}</FormError>}
            </FormItem>
            <FormItem>
              <Label>Message</Label>
              <Textarea disabled={isPending} {...register('message')} />
              {errors?.message && (
                <FormError>{errors.message.message}</FormError>
              )}
            </FormItem>
            <Button
              type="submit"
              $size="medium"
              disabled={isPending || !isValid}
            >
              Submit
            </Button>
          </FormContent>
        </form>
      </Card>
    </>
  );
}
